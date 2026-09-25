<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_1_model&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_1_model&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_3_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_3_modela&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# atogepant

- **generic name:** atogepant
- **ATC codes:** `N02CD07`
- **DrugBank:** [DB16098](https://go.drugbank.com/drugs/DB16098)
- **groups:** approved, investigational

## About

**Description.** Atogepant is an oral antagonist of calcitonin gene-related peptide (CGRP) receptors indicated for the prevention of episodic migraine headaches. It was developed by AbbVie and received FDA approval under the brand name Qulipta in September 2021.[L38814] While its approval was predated by two other members of the same drug family, namely [ubrogepant] and [rimegepant], these agents are indicated only for abortive migraine therapy - atogepant is novel in that it is the first and only oral CGRP antagonist approved for preventative use in migraine.[L38814] In December 2022, atogepant received Health Canada approval for the prevention of episodic migraine in adults.[L44642] It also received approval for preventive treatment of adult migraine by the EMA in August 2023.[L48016]

In patients requiring preventative migraine therapy, current practice guidelines recommend the use of certain anti-epileptic medications (e.g. [valproic acid] or [topiramate]) or beta-blockers (e.g. [propranolol]), all of which can be associated with significant adverse effects.[A239094] The "gepants" family of drugs, including atogepant, are comparatively well-tolerated[A189207,L38739] and may provide a desirable treatment option for patients struggling with adverse reactions to other preventative therapies.

**Indication.** Atogepant is indicated for the preventive treatment of migraine in adults by the FDA, EMA, and Health Canada.[L44647,L46033,L48001]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 04:04 | 9:31 | 3/0/0 | 0/0/0 | 0/0/0 | 168,016/18,110 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.824). The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Schlachter_2026_phase_1_model](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model.md) | Schlachter (2026) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Schlachter_2026_phase_2_modela](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md) | Schlachter (2026) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.731). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Schlachter_2026_phase_3_modela](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela.md) | Schlachter (2026) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=atogepant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | bile duct | <sub>“…ly,[A239069] with at least 10 other metabolites detected in feces representing &lt;10% of the…”</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…nistered dose was recovered as unchanged parent drug in the feces and 5% as unchanged pare…”</sub> | prose |
| excretion | kidney | `SLC22A6` substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boinpally_2023.pdf` | Boinpally R et al., Effects of CYP3A4 inhibition/induction…, Pain management (2023) | pgx | 7 | [10.2217/pmt-2023-0056](https://doi.org/10.2217/pmt-2023-0056) | [37650778](https://www.ncbi.nlm.nih.gov/pubmed/37650778) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Boinpally_2024.pdf` | Boinpally R et al., Pharmacokinetics and Safety of Atogepan…, Clinical pharmacology in dr… (2024) | pgx | 7 | [10.1002/cpdd.1407](https://doi.org/10.1002/cpdd.1407) | [38702918](https://www.ncbi.nlm.nih.gov/pubmed/38702918) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-21T03:56:03.068679+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boinpally_2023 | irrelevant | 2 | 0 | The study reports only summary exposure metrics (AUC, Cmax, Tmax) for a drug interaction assessment, lacking the compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PGx | Boinpally_2023_2 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4/OATP inhibition/induction) rather than the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Boinpally_2024 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (quinidine) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Boinpally_2025_2 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for atogepant in lactating women, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for half-life are not explicitly listed in the provided text. |
| popPK | Boinpally_2026 | irrelevant | 2 | 1 | The study reports CSF/plasma concentration ratios and specific plasma/CSF concentrations at discrete time points, but does not provide compartmental PK parameters (CL, V, Q, ka) or a population PK model for atogepant. |
| PD | Boinpally_2026 | not_relevant | 2 | 1 | The paper reports PK parameters (CSF/plasma ratios) and cites a preclinical EC50 value, but does not report any clinical exposure-response or dose-response analysis with numeric PD parameters for atogepant. |
| popPK | Iannone_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing sleep quality and adverse events, not a pharmacokinetic study, and reports no quantitative disposition parameters for atogepant. |
| popPK | Iannone_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability study (real-world evaluation) that reports no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (CYP3A4 inhibition) and clinical safety outcomes, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Schlachter_2026_2 | irrelevant | 2 | 0 | The paper is an exposure-response modeling study that uses predicted exposures from a separate population PK model rather than reporting original quantitative PK parameters (CL, V, etc.) for atogepant. |
| PGx | Takizawa_2023 | not_relevant | 0 | 0 | The paper is a narrative review discussing drug-drug interactions (CYP3A4) and does not report pharmacogenomic effects of gene variants on atogepant PK/PD. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic drug-drug interactions (CYP3A inhibition/induction) for atogepant, not pharmacogenomic effects based on gene variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 03:56 UTC</sub>
