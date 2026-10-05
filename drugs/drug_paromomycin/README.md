<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;paromomycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paromomycin_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# paromomycin

- **generic name:** paromomycin
- **ATC codes:** `A07AA06`
- **DrugBank:** [DB01421](https://go.drugbank.com/drugs/DB01421) · **PubChem:** [CID 165580](https://pubchem.ncbi.nlm.nih.gov/compound/165580)
- **molar mass:** 615.6285 g/mol (C23H45N5O14) — DrugBank
- **groups:** approved, investigational

## About

Paromomycin is an antibiotic used to treat intestinal infections such as amebiasis and cryptosporidiosis. It is an approved medicine and appears on the WHO list of essential medicines, used mainly as an intestinal antiinfective.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415625](https://www.wikidata.org/wiki/Q415625) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| paromomycin | parent | 615.629 | C23H45N5O14 | DrugBank | [165580](https://pubchem.ncbi.nlm.nih.gov/compound/165580) | Lentzen_1981, Verrest_2021_2, Verrest_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:37 | 12:14 | 1/1/1 | 1/0/0 | 0/0/0 | 220,944/37,151 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/2 | 3/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Verrest_2023_reference](drugs/drug_paromomycin/Paromomycin_Verrest2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Verrest L et al., Population pharmacokinetics of a combin…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Lentzen_1981_reference](drugs/drug_paromomycin/Paromomycin_Lentzen1981_reference.md) | — | 1-compartment (no model) | 3 | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Verrest_2021_2_reference](drugs/drug_paromomycin/Paromomycin_Verrest2021v2_reference.md) | — | nonlinear / manual (no model) | 0 | Verrest L et al., Geographical Variability in Paromomycin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01036-8](https://doi.org/10.1007/s40262-021-01036-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schupfner_2013_development_of_C_parvum](drugs/drug_paromomycin/pd_Schupfner_2013_development_of_C_parvum.md) | development of C. parvum ← paromomycin · direct sigmoid Emax (Hill) effect | — | Schupfner M et al., Evaluation of putative anti-cryptospori…, Parasitology research 112 S… (2013) | [10.1007/s00436-013-3439-7](https://doi.org/10.1007/s00436-013-3439-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paromomycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RPL10L (inhibitor), RPSA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lentzen_1981.pdf` | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [7198477](https://pubmed.ncbi.nlm.nih.gov/7198477) | The study reports quantitative PK parameters (half-life, Cmax, Tmax, AUC comparison) for paromomycin in humans using a one-compartment model. |
| `Chu_2026.pdf` | Chu WY et al., Skin pharmacokinetics and pharmacodynam…, International journal of an… (2026) | popPK | 8 | [10.1016/j.ijantimicag.2026.107713](https://doi.org/10.1016/j.ijantimicag.2026.107713) | [41519406](https://pubmed.ncbi.nlm.nih.gov/41519406) | The study reports skin target site pharmacokinetics for paromomycin, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text, only relative ratios and qualitative attainment data. |

<sub>queue written 2026-10-04T18:26:06.913018+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chu_2026 | relevant | 8 | 2 | The study reports skin target site pharmacokinetics for paromomycin, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text, only relative ratios and qualitative attainment data. |
| popPK | Donegatti_2020 | irrelevant | 0 | 0 | The paper describes an analytical method (CZE-UV) for quantifying paromomycin in pharmaceutical formulations and a release study, not a pharmacokinetic study in a biological species. |
| PD | Donegatti_2020 | not_relevant | 0 | 0 | The paper describes a chromatographic analytical method (CZE-UV) for quantifying aminoglycosides and mentions a controlled release experiment fitted with a Hill equation, but it does not report any pharmacodynamic (exposure-response or dose-response) relationship or PD parameters for paromomycin. |
| popPK | Fatma_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of paromomycin as an antiviral agent, reporting EC50 values but no pharmacokinetic parameters. |
| popPK | Ferreira_2022 | irrelevant | 0 | 0 | The study reports in vitro drug susceptibility (EC50) of Leishmania isolates to paromomycin, not pharmacokinetic parameters (CL, V, t1/2) for the drug in a host. |
| popPK | Kangussu-Marcolino_2022 | irrelevant | 0 | 0 | The paper is an in-vitro drug screening study for Entamoeba histolytica where paromomycin is only mentioned as a standard comparator, with no pharmacokinetic data reported. |
| PD | Kangussu-Marcolino_2022 | not_relevant | 0 | 0 | The paper focuses on drug repurposing screening for Entamoeba histolytica and does not report any pharmacodynamic or exposure-response data for paromomycin. |
| popPK | Paixão_2018 | irrelevant | 2 | 0 | Paromomycin is used only as an external reference marker to validate a gastric emptying model, and no quantitative PK parameters (CL, V, etc.) for paromomycin are reported in the evidence. |
| popPK | Rayamajhi_2026 | irrelevant | 0 | 0 | The study assesses the toxicological effects of paromomycin on the microalgae Haematococcus lacustris, not its pharmacokinetic disposition parameters. |
| popPK | Schupfner_2013 | irrelevant | 0 | 0 | The study is an in vitro efficacy assessment of anti-cryptosporidial drugs where paromomycin serves only as a comparator, with no pharmacokinetic parameters reported. |
| popPK | Seifert_2006 | irrelevant | 0 | 0 | The study assesses drug interactions (pharmacodynamics) of miltefosine with paromomycin, but does not report pharmacokinetic parameters (CL, V, t1/2) for paromomycin. |
| PD | Seifert_2006 | not_relevant | 3 | 2 | The paper reports in vitro interaction indices (FICs) and in vivo activity enhancement indices (AEI) for drug combinations, but does not provide a pharmacodynamic model (e.g., Emax, EC50) or exposure-response relationship for paromomycin alone. |
| popPK | Seifert_2011 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of drug interactions against Leishmania, not a pharmacokinetic study of paromomycin. |
| PD | Seifert_2011 | not_relevant | 3 | 2 | The paper reports in vitro drug interaction data (FICs) and mentions EC50/EC90 levels for classification, but does not provide the specific numeric concentration-effect curves or PD parameters for paromomycin alone or in combination that would allow derivation of a quantitative PD relationship. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study investigates the antiviral activity of geneticin and other aminoglycosides in vitro, with paromomycin serving only as a comparator agent showing weak activity, and no pharmacokinetic parameters are reported. |
| PD | Zhang_2009 | not_relevant | 1 | 0 | The paper reports PD parameters (EC50, EC90) for geneticin, not paromomycin; paromomycin is only mentioned qualitatively as having weak activity. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 18:26 UTC</sub>
