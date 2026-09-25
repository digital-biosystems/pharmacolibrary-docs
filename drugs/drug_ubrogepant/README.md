<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;ubrogepant&quot;}]"></div>

# ubrogepant

- **generic name:** ubrogepant
- **ATC codes:** `N02CD04`
- **DrugBank:** [DB15328](https://go.drugbank.com/drugs/DB15328)
- **groups:** approved, investigational

## About

**Description.** Ubrogepant is indicated for the acute treatment of migraine headaches with or without aura in adults.[L10926] It was approved by the FDA on December 23, 2019, and is the first oral calcitonin gene-related peptide (CGRP) receptor antagonist approved for the acute treatment of migraine.[L10959] Several oral small molecule CGRP receptor antagonists, belonging to a class of medications referred to as "gepants", have been investigated for migraines, but only ubrogepant and [rimegepant] remain in clinical development.[A189207,A189213] Previous agents within this class were efficacious but limited by liver toxicity - this led to the development of ubrogepant, which was designed to be a hepatoxicity-free alternative to its predecessors.[A189195] Several parenteral monoclonal antibodies acting against the CGRP pathway (e.g. [erenumab], [fremanezumab], [galcanezumab]) have also been approved in recent years.[A189207] Ubrogepant was approved by Health Canada on November 10, 2022.[L43987]

Compared to the current standard of therapy for migraine treatment, namely triptans such as [sumatriptan] and [almotriptan], CGRP antagonists present several advantages.[A189195] They appear to be better tolerated, do not contribute to medication overuse headaches, and carry no apparent cardiovascular risk, making them suitable for use in patients with cardiovascular disease.[A189195] The development of oral gepants, including ubrogepant, may therefore constitute a significant advance in migraine headache treatment and may become the new standard of therapy in the treatment of this debilitating condition.

**Indication.** Ubrogepant is indicated for the acute treatment of migraine with or without aura in adults.[L10926,L43987]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 07:59 | 4:31 | 0/0/0 | 2/0/0 | 0/0/0 | 125,132/2,909 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.735). The first reading is what the record holds.">cross-check: disputed</span> | [Boucherie_2024](drugs/drug_ubrogepant/pd_Boucherie_2024_CGRP_relaxation.md) | Boucherie DM et al., Comparison of gepant effects at therape…, The journal of headache and… (2024) | [10.1186/s10194-024-01846-8](https://doi.org/10.1186/s10194-024-01846-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Li_2020](drugs/drug_ubrogepant/pd_Li_2020_PF.md) | Li CC et al., Making Better Dose Decisions: Using Exp…, Clinical and translational… (2020) | [10.1111/cts.12730](https://doi.org/10.1111/cts.12730) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Li_2020](drugs/drug_ubrogepant/pd_Li_2020_PR.md) | Li CC et al., Making Better Dose Decisions: Using Exp…, Clinical and translational… (2020) | [10.1111/cts.12730](https://doi.org/10.1111/cts.12730) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ubrogepant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` substrate, `MAOA` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…The main route of elimination is fecal/biliary, while renal excretion is comparatively min…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 28 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stodtmann_2026.pdf` | Stodtmann S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2026) | popPK | 10 | [10.1002/jcph.70175](https://doi.org/10.1002/jcph.70175) | [42212509](https://pubmed.ncbi.nlm.nih.gov/42212509) | The paper describes a population PK model for ubrogepant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Li_2018.pdf` | Li CC et al., Population PK Analyses of Ubrogepant (M…, Journal of clinical pharmac… (2018) | popPK | 8 | [10.1002/jcph.1021](https://doi.org/10.1002/jcph.1021) | [29136283](https://pubmed.ncbi.nlm.nih.gov/29136283) | The paper describes a population PK study for ubrogepant, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values (CL, V, etc.). |
| `Boinpally_2026.pdf` | Boinpally RR et al., Ubrogepant Plasma and Cerebrospinal Flu…, Clinical and translational… (2026) | pd | 5 | [10.1111/cts.70560](https://doi.org/10.1111/cts.70560) | [42012062](https://www.ncbi.nlm.nih.gov/pubmed/42012062) | metadata signals extractable PD data (EC50) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-21T07:57:23.217602+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Boinpally_2024 | not_relevant | 2 | 1 | The paper is a review summarizing mechanism and clinical outcomes but does not present a specific exposure-response or dose-response analysis with numeric PD parameters (e.g., EC50, Emax) for ubrogepant. |
| popPK | Boinpally_2026 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Boinpally_2026 | not_relevant | 0 | 0 | The paper focuses on PK characterization (plasma and CSF exposures) and does not report a pharmacodynamic model or numeric exposure-response/dose-response parameters. |
| PGx | Boinpally_2026_2 | not_relevant | 0 | 0 | The paper is a mass balance and metabolism study in healthy adults that does not investigate the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Boucherie_2024 | irrelevant | 2 | 1 | The paper is a pharmacodynamic study comparing gepants at therapeutic concentrations, using ubrogepant only as a comparator with cited Cmax values rather than reporting original quantitative disposition parameters (CL, V, ka) or a PK model for ubrogepant. |
| popPK | Comisar_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zavegepant, not ubrogepant. |
| PD | Comisar_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for zavegepant, not ubrogepant, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Curto_2020 | irrelevant | 2 | 0 | The paper is a narrative review discussing ubrogepant's clinical profile and does not report original quantitative pharmacokinetic parameter values. |
| PD | Curto_2020 | not_relevant | 2 | 0 | The text is a qualitative review/expert opinion summarizing clinical efficacy and safety without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| PGx | Dighriri_2023 | not_relevant | 0 | 0 | The paper is a general review of ubrogepant's efficacy and safety and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | González-Hernández_2025 | irrelevant | 1 | 0 | The paper is a narrative review without original quantitative PK parameter values for ubrogepant. |
| PD | González-Hernández_2025 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD characteristics of anti-CGRP therapies but does not report specific numeric PD parameters or extractable exposure-response curves for ubrogepant. |
| popPK | Leung_2021 | irrelevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on binding interactions and does not report any pharmacokinetic parameters for ubrogepant. |
| PD | Leung_2021 | not_relevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on binding interactions and binding energies, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Li_2018 | relevant | 8 | 0 | The paper describes a population PK study for ubrogepant, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values (CL, V, etc.). |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper focuses exclusively on population PK modeling and the implementation of dried blood spot sampling; it does not report any pharmacodynamic or exposure-response analysis or numeric PD parameters. |
| popPK | Li_2020 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling for efficacy and dose selection, referencing a separate publication for the population PK model details and not reporting specific quantitative PK parameter values (CL, V, Q, ka) in the provided text. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a narrative review of clinical practice and efficacy/safety profiles, containing no pharmacogenomic data or genotype-specific PK/PD parameters. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (CYP3A4 inhibition) and clinical safety outcomes, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Moore_2020 | irrelevant | 2 | 0 | The paper reports pharmacodynamic and binding affinity parameters (Ki, IC50, EC50) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Stodtmann_2026 | relevant | 10 | 0 | The paper describes a population PK model for ubrogepant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Szkutnik-Fiedler_2020 | irrelevant | 2 | 1 | The paper is a review that reports only qualitative PK descriptors (half-life, protein binding) and DDI fold-changes for ubrogepant, lacking the quantitative compartmental parameters (CL, V, Q, ka) required for extraction. |
| PD | Szkutnik-Fiedler_2020 | not_relevant | 1 | 0 | The paper is a review focusing on drug-drug interactions and safety, lacking specific numeric pharmacodynamic parameters or exposure-response models for ubrogepant. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug and drug-food interactions, not pharmacogenomic effects of gene variants on PK/PD. |
| popPK | Voss_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for migraine treatment and does not report pharmacokinetic parameters or disposition data for ubrogepant. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
