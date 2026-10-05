<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;rimegepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rimegepant_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rimegepant_Comisar2025v2_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rimegepant

- **generic name:** rimegepant
- **ATC codes:** `N02CD06`
- **DrugBank:** [DB12457](https://go.drugbank.com/drugs/DB12457) · **PubChem:** [CID 51049968](https://pubchem.ncbi.nlm.nih.gov/compound/51049968)
- **molar mass:** 534.568 g/mol (C28H28F2N6O3) — DrugBank
- **groups:** approved, investigational

## About

Rimegepant is a calcitonin gene-related peptide receptor antagonist used to treat acute migraine attacks in adults. It is an approved medicine and is authorised in the European Union for migraine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27272184](https://www.wikidata.org/wiki/Q27272184) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 22:11 | 0:15 | 2/0/0 | 0/0/0 | 0/0/0 | 6,303/440 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Comisar_2025_reference](drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+7 cov.) | Comisar CM et al., Exposure Matching Using Population Phar…, Clinical and translational… (2025) | [10.1111/cts.70360](https://doi.org/10.1111/cts.70360) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span> | [Comisar_2025_2_reference](drugs/drug_rimegepant/Rimegepant_Comisar2025v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rimegepant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 22 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Comisar_2025_2.pdf` | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | popPK | 10 | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) | [40614133](https://pubmed.ncbi.nlm.nih.gov/40614133) | The paper is a population PK study for rimegepant and explicitly lists numeric values for CL/F, Vc/F, Q/F, Vp/F, and ka in the text. |
| `Lim_2026.pdf` | Lim CN et al., A phase 1, multicenter, open-label stud…, Headache (2026) | popPK | 8 | [10.1111/head.15074](https://doi.org/10.1111/head.15074) | [41133671](https://pubmed.ncbi.nlm.nih.gov/41133671) | The study reports population PK modeling and summary exposure metrics (Cmax, AUC) for rimegepant, but specific disposition parameters like clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Bhardwaj_2025.pdf` | Bhardwaj R et al., Characterization of rimegepant drug-dru…, Headache (2025) | pgx | 7 | [10.1111/head.14836](https://doi.org/10.1111/head.14836) | [39364583](https://www.ncbi.nlm.nih.gov/pubmed/39364583) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-21T07:22:28.720113+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Baker_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (plasma/milk concentrations, RID) but contains no pharmacodynamic or exposure-response analysis. |
| PGx | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving CYP3A4/2C9 inhibitors and inducers, not pharmacogenomic effects based on genetic variants or genotypes. |
| PGx | Comisar_2025_2 | not_relevant | 0 | 0 | The paper reports population PK covariates (weight, hepatic impairment, CYP3A4 inhibitors) but does not analyze or report any genetic variants or pharmacogenomic effects. |
| PD | DeFalco_2021 | not_relevant | 1 | 0 | The paper is a clinical review summarizing efficacy and safety outcomes from RCTs but does not report or derive numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships. |
| PD | Dermitzakis_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (pain freedom, VAS reduction) for a fixed dose but does not provide drug concentration data or fit a pharmacodynamic model to derive parameters like Emax or EC50. |
| PD | Dong_2023 | not_relevant | 1 | 0 | The paper is a meta-analysis of adverse drug reaction incidence and correlates (demographics, dosage), not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Lim_2026 | relevant | 8 | 2 | The study reports population PK modeling and summary exposure metrics (Cmax, AUC) for rimegepant, but specific disposition parameters like clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a narrative review comparing gepants and triptans for migraine treatment and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (CYP3A4 inhibition) and clinical safety outcomes, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on rimegepant PK/PD. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a title ("Drugs for Migraine") and contains no data, analysis, or numeric parameters. |
| PD | unknown_2020_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a title for a paper on atogepant, not rimegepant, and contains no data or PD parameters. |
| PD | unknown_2021_2 | not_relevant | 0 | 0 | The paper discusses dihydroergotamine (Trudhesa), not rimegepant, and does not report PD parameters for the target drug. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or fragment ("Drugs for migraine") and contains no data, analysis, or numeric parameters for rimegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is a title for zavegepant, not rimegepant, and contains no data or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 07:22 UTC</sub>
