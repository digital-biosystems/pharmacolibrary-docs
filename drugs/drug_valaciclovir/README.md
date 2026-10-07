<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valaciclovir&quot;}]"></div>

# valaciclovir

- **generic name:** valaciclovir
- **ATC codes:** `J05AB11`
- **DrugBank:** [DB00577](https://go.drugbank.com/drugs/DB00577) · **PubChem:** [CID 60773](https://pubchem.ncbi.nlm.nih.gov/compound/60773)
- **molar mass:** 324.3357 g/mol (C13H20N6O4) — DrugBank
- **groups:** approved, investigational

## About

Valaciclovir is an antiviral medicine used to treat infections caused by herpes viruses, including shingles, eye shingles, cold sores and genital herpes. It is an approved antiviral for systemic use and is widely used in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418594](https://www.wikidata.org/wiki/Q418594) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valaciclovir | parent | 324.336 | C13H20N6O4 | DrugBank | [60773](https://pubchem.ncbi.nlm.nih.gov/compound/60773) | Zeng_2009 |
| acyclovir | metabolite | 225.208 | C8H11N5O3 | PubChem | [135398513](https://pubchem.ncbi.nlm.nih.gov/compound/135398513) | Zeng_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:37 | 4:05 | 0/1/0 | 1/0/0 | 0/0/0 | 50,908/34,683 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zeng_2009_reference](drugs/drug_valaciclovir/Valaciclovir_Zeng2009_reference.md) | — | 1-compartment (no model) | 1 | Zeng L et al., Population pharmacokinetics of acyclovi…, Antimicrobial agents and ch… (2009) | [10.1128/AAC.01138-08](https://doi.org/10.1128/AAC.01138-08) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hamilton_2020_placental_transfer](drugs/drug_valaciclovir/pd_Hamilton_2020_placental_transfer.md) | placental transfer ← Aciclovir · direct linear effect | — | Hamilton ST et al., Investigational Antiviral Therapy Model…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01627-20](https://doi.org/10.1128/AAC.01627-20) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hamilton_2020_viral_replication](drugs/drug_valaciclovir/pd_Hamilton_2020_viral_replication.md) | viral replication ← Aciclovir · direct Emax (saturable) effect | — | Hamilton ST et al., Investigational Antiviral Therapy Model…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01627-20](https://doi.org/10.1128/AAC.01627-20) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=valaciclovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | ileum | `SLC10A2` substrate | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` inhibitor/substrate, `SLC22A6` unknown, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GUK1 (substrate), SLC6A14 (unknown), TK (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faure-Bardon_2025.pdf` | Faure-Bardon V et al., Quantification of maternal and fetal va…, The Journal of antimicrobia… (2025) | popPK | 10 | [10.1093/jac/dkae470](https://doi.org/10.1093/jac/dkae470) | [39810739](https://pubmed.ncbi.nlm.nih.gov/39810739) | Although this is a population PK study of valaciclovir's active metabolite (aciclovir) in humans, the specific numeric parameter values (CL, V, ka, etc.) are not provided in the extracted evidence, which only contains abstract-level summaries and text descriptions. |
| `Kably_2025.pdf` | Kably B et al., Population pharmacokinetics of aciclovi…, The Journal of antimicrobia… (2025) | popPK | 10 | [10.1093/jac/dkaf070](https://doi.org/10.1093/jac/dkaf070) | [40155064](https://pubmed.ncbi.nlm.nih.gov/40155064) | The study is a population PK model of valaciclovir's metabolite aciclovir, but specific clearance, volume, and rate constants are not explicitly listed in the text provided (only AUCs and eGFR correlations). |
| `Simon_2002.pdf` | Simon MW et al., Pharmacokinetics and safety of valacicl…, Drugs in R&D (2002) | popPK | 10 | [10.2165/00126839-200203060-00001](https://doi.org/10.2165/00126839-200203060-00001) | [12516939](https://pubmed.ncbi.nlm.nih.gov/12516939) | The study reports quantitative non-compartmental PK parameters (CL/F, Vd/F, t1/2) for the active metabolite aciclovir following valaciclovir administration in children. |

<sub>queue written 2026-10-07T14:33:59.504968+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chono_2010 | irrelevant | 0 | 0 | The study evaluates the antiviral efficacy of ASP2151 using valaciclovir only as a comparator drug in an in vivo mouse model, without reporting pharmacokinetic parameters for valaciclovir. |
| popPK | Das_2023 | irrelevant | 0 | 0 | The paper is a study on the synthesis and in-vitro antiviral mechanism of new compounds, using valaciclovir/acyclovir only as references; it contains no pharmacokinetic parameters. |
| popPK | Faure-Bardon_2025 | irrelevant | 10 | 0 | Although this is a population PK study of valaciclovir's active metabolite (aciclovir) in humans, the specific numeric parameter values (CL, V, ka, etc.) are not provided in the extracted evidence, which only contains abstract-level summaries and text descriptions. |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assessment comparing aciclovir (not valaciclovir) and other antivirals in cell cultures, containing no pharmacokinetic parameters. |
| popPK | Kably_2025 | relevant | 10 | 2 | The study is a population PK model of valaciclovir's metabolite aciclovir, but specific clearance, volume, and rate constants are not explicitly listed in the text provided (only AUCs and eGFR correlations). |
| popPK | Neves_2010 | irrelevant | 3 | 1 | Study reports bioequivalence metrics (AUC, Cmax) via non-compartmental analysis, lacking disposition parameters like clearance, volume, or compartmental model parameters required for population PK. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of antiviral binding to ACE2, not a pharmacokinetic study, and reports no PK parameters for valaciclovir. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The study focuses on the anti-herpetic mechanism of amenamevir and its comparison with acyclovir/valaciclovir in vitro, without reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for valaciclovir. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:34 UTC</sub>
