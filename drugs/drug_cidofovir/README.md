<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cidofovir&quot;}]"></div>

# cidofovir

- **generic name:** cidofovir
- **ATC codes:** `J05AB12`
- **DrugBank:** [DB00369](https://go.drugbank.com/drugs/DB00369) · **PubChem:** [CID 60613](https://pubchem.ncbi.nlm.nih.gov/compound/60613)
- **molar mass:** 279.187 g/mol (C8H14N3O6P) — DrugBank
- **groups:** approved, investigational

## About

Cidofovir is an antiviral drug used to treat cytomegalovirus retinitis. It is an approved medicine but is used only in a narrow, specialist setting, mainly for cytomegalovirus retinitis in patients who cannot take other antivirals, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423445](https://www.wikidata.org/wiki/Q423445) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:47 | 6:31 | 0/0/0 | 2/0/0 | 0/0/0 | 250,854/5,425 | einfracz / qwen3.8-27b | 13 | 2/9 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Breddemann_2008_pharmacodynamics](drugs/drug_cidofovir/pd_Breddemann_2008_pharmacodynamics.md) | pharmacodynamics ← cidofovir · model not identified | — | Breddemann A et al., [Computer simulations to support drug t…, Medizinische Monatsschrift… (2008) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hamilton_2020_HCMV_infected_trophoblast_viral_replication_viral_protein_expression](drugs/drug_cidofovir/pd_Hamilton_2020_HCMV_infected_trophoblast_viral_replication_vi.md) | HCMV-infected trophoblast viral replication / viral protein expression ← cidofovir · inhibition effect | — | Hamilton ST et al., Investigational Antiviral Therapy Model…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01627-20](https://doi.org/10.1128/AAC.01627-20) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cidofovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TYMP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 187 matched, 79 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cundy_1996.pdf` | Cundy KC et al., Pharmacokinetics of cidofovir in monkey…, Drug metabolism and disposi… (1996) | popPK | 10 | not captured | [8818570](https://pubmed.ncbi.nlm.nih.gov/8818570) | The study reports quantitative PK parameters (clearance, half-lives, bioavailability) for cidofovir in monkeys with numeric values explicitly stated in the abstract. |
| `Neant_2018.pdf` | Neant N et al., Model of population pharmacokinetics of…, The Journal of antimicrobia… (2018) | popPK | 10 | [10.1093/jac/dky192](https://doi.org/10.1093/jac/dky192) | [29860512](https://pubmed.ncbi.nlm.nih.gov/29860512) | The paper describes a population PK model for cidofovir, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only AUC ranges. |

<sub>queue written 2026-10-07T12:45:30.459109+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altmann_2012 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of mitoxantrone and its interaction with cidofovir in mice, containing no pharmacokinetic parameters (CL, V, etc.) for cidofovir. |
| popPK | Babaev_2022 | irrelevant | 0 | 0 | The paper studies the antiviral activity of triterpenoid compounds where cidofovir is used only as a standard comparator drug, with no pharmacokinetic data reported. |
| popPK | Beadle_2006 | irrelevant | 0 | 0 | The study focuses on the in-vitro antiviral synthesis and evaluation of analogs, containing no pharmacokinetic disposition parameters. |
| popPK | Bedard_1999 | irrelevant | 0 | 0 | The paper describes an in vitro cell proliferation assay for antiviral susceptibility testing, not a pharmacokinetic study, and contains no disposition parameters for cidofovir. |
| popPK | Bonvicini_2015 | irrelevant | 0 | 0 | The study evaluates the antiviral efficacy (EC50/EC90) of cidofovir in vitro against Parvovirus B19 and does not report pharmacokinetic disposition parameters. |
| popPK | Bravo_2011 | irrelevant | 0 | 0 | The study focuses on the in vivo antiviral efficacy of a cidofovir prodrug (HDP-CDV) in guinea pigs and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume of distribution). |
| popPK | Bua_2019 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assessment of brincidofovir against parvovirus B19, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for cidofovir. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | The paper is an in vitro systematic review of antiviral activity (EC50 values) and does not report any pharmacokinetic or disposition parameters. |
| PGx | Cherrier_2018 | not_relevant | 0 | 0 | The paper reports viral genetic mutations conferring resistance to cidofovir, not human pharmacogenomic variants affecting cidofovir pharmacokinetics or pharmacodynamics. |
| popPK | Chou_2021 | irrelevant | 0 | 0 | The study is an in-vitro virology study measuring antiviral susceptibility (EC50) of CMV mutants to cidofovir, not a pharmacokinetic study of cidofovir disposition parameters. |
| popPK | Drouot_2016 | irrelevant | 0 | 0 | This is an in vitro mechanistic/virology study focusing on antiviral synergy and IC50 values, not a pharmacokinetic study. |
| popPK | Fryer_2004 | irrelevant | 0 | 0 | The study reports antiviral susceptibility (EC50) in vitro, not pharmacokinetic disposition parameters. |
| popPK | Gentry_2015 | irrelevant | 0 | 0 | The study is an in-vitro virology investigation into drug resistance mechanisms and does not report any pharmacokinetic parameters for cidofovir. |
| popPK | Gosert_2011 | irrelevant | 0 | 0 | The paper is an in vitro virology study evaluating the antiviral efficacy (EC50/CC50) of a cidofovir lipid conjugate (CMX001), not a pharmacokinetic study of cidofovir itself. |
| PGx | Hakki_2011 | not_relevant | 0 | 0 | The paper reviews viral genetic mutations causing drug resistance, not human pharmacogenomic variants affecting cidofovir PK or PD. |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo antiviral efficacy investigation comparing multiple drugs, reporting only EC50 and inhibition percentages, with no pharmacokinetic parameters (CL, V, etc.) for cidofovir. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | The study is an in-vitro virology/antiviral activity assessment of cidofovir against Monkeypox virus, not a pharmacokinetic study reporting disposition parameters for cidofovir. |
| PGx | Huber_2012 | not_relevant | 1 | 1 | The text mentions cidofovir adverse ocular reactions (inflammation, low pressure) but does not report any specific gene variant or genotype affecting its PK/PD parameters. |
| PGx | Huber_2012_2 | not_relevant | 0 | 0 | The paper is a general review of ocular adverse reactions and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cidofovir. |
| popPK | Jesus_2009 | irrelevant | 0 | 0 | The study is an in vitro virology evaluation of cidofovir's antiviral efficacy (EC50) against vaccinia viruses, not a pharmacokinetic study. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | The study is an in vitro virology assay measuring antiviral potency (EC50), not a pharmacokinetic study reporting disposition parameters for cidofovir. |
| PGx | Koepf_2020 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction (letermovir affecting tacrolimus levels via CYP3A4) and a viral resistance mutation, but it does not report a human pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of cidofovir. |
| popPK | Kornii_2019 | irrelevant | 0 | 0 | The paper reports in vitro antiviral efficacy (EC50) and uses cidofovir only as a comparator standard, with no pharmacokinetic parameters reported. |
| popPK | Ledbetter_2015 | irrelevant | 0 | 0 | The study is a clinical efficacy trial evaluating antiviral activity and toxicity in dogs, and it does not report any pharmacokinetic parameters (CL, V, etc.) for cidofovir. |
| popPK | Lloyd_2022 | irrelevant | 0 | 0 | The paper describes the antiviral efficacy of a cidofovir prodrug (USC-373) in vitro and in mice but does not report quantitative pharmacokinetic parameters (clearance, volume, etc.) for cidofovir. |
| popPK | Loddo_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro antiviral activity where cidofovir is used only as a reference comparator, with no pharmacokinetic data provided. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotic pharmacokinetics in patients with obesity and does not contain data for cidofovir. |
| PGx | Mehta_2021 | not_relevant | 0 | 0 | The paper describes clinical outcomes and toxicity of cidofovir but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Neant_2018 | relevant | 10 | 2 | The paper describes a population PK model for cidofovir, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only AUC ranges. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | The study reports in vitro antiviral susceptibility (EC50 values) of HHV-8 to cidofovir, but contains no pharmacokinetic disposition parameters. |
| PGx | Ng_2017 | not_relevant | 0 | 0 | The paper discusses leflunomide, not cidofovir. |
| popPK | Olson_2014 | irrelevant | 0 | 0 | The study reports in vitro efficacy (EC50) against a virus, not pharmacokinetic parameters. |
| PGx | Orlando_2002 | not_relevant | 0 | 0 | The paper evaluates clinical efficacy in a general HIV population without assessing the impact of genetic variants on cidofovir pharmacokinetics or pharmacodynamics. |
| popPK | Patil_2017 | irrelevant | 0 | 0 | The study is a viral screening assay where cidofovir is used only as a comparative standard (EC50), reporting no pharmacokinetic parameters. |
| popPK | Quenelle_2007 | irrelevant | 0 | 0 | The study evaluates the antiviral efficacy of ST-246 in mice with cidofovir serving only as an in-vitro comparator (EC50 values provided for efficacy, not pharmacokinetic disposition parameters). |
| PGx | Richardson_2021 | not_relevant | 0 | 0 | The study reports clinical efficacy of brincidofovir on HPV-related laryngeal diseases in a small pilot group, but it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Romanowski_2021 | irrelevant | 0 | 0 | This is an in vitro antiviral susceptibility study (EC50 determination) where cidofovir is used only as a positive control, not a pharmacokinetic study. |
| popPK | Romanowski_2021_2 | irrelevant | 0 | 0 | The study is an antiviral efficacy and safety trial in rabbits where cidofovir is used only as a comparator control, and no pharmacokinetic parameters (clearance, volume, etc.) are reported. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of maribavir, with cidofovir mentioned only as a comparator anti-CMV agent, not as the subject of PK analysis. |
| popPK | Vogel_2002 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of ethylenediaminedisuccinic acid (EDDS), with cidofovir used only as a comparator for resistance profiles, and no cidofovir pharmacokinetic parameters are reported. |
| popPK | Zhang_2025 | irrelevant | 4 | 1 | The study focuses on the antiviral efficacy of cidofovir derivatives (prodrugs) in mice, and while it mentions "pharmacokinetic analysis," the quantitative disposition parameters (CL, V, etc.) are not present in the provided text, appearing only as qualitative descriptions or references to figures not included. |
| PGx | von_2023 | not_relevant | 0 | 0 | The paper focuses on detecting viral resistance mutations in CMV, not human pharmacogenomic variants affecting cidofovir PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
