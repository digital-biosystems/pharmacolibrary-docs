<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;brexpiprazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brexpiprazole_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_reference&quot;,&quot;label&quot;:&quot;Higashi_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Frederiksen2023v3_reference&quot;,&quot;label&quot;:&quot;Frederiksen_2023_3_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# brexpiprazole

- **generic name:** brexpiprazole
- **ATC codes:** `N05AX16`
- **DrugBank:** [DB09128](https://go.drugbank.com/drugs/DB09128)
- **groups:** approved, investigational

## About

**Description.** Brexpiprazole is an atypical antipsychotic and a novel D2 dopamine and serotonin 1A partial agonist called serotonin-dopamine activity modulator (SDAM). It has a high affinity for serotonin, dopamine and alpha (α)-adrenergic receptors.[L46417] Although it is structurally similar to [aripiprazole], brexpiprazole has different binding affinities for dopamine and serotonin receptors. Compared to aripiprazole, brexpiprazole has less potential for partial agonist-mediated adverse effects such as extrapyramidal symptoms, which is attributed to lower intrinsic activity at the D2 receptor. It also displays stronger antagonism at the 5-HT1A and 5-HT2A receptors.[A182186, A38385, A259661]

Brexpiprazole was first approved by the FDA on July 10, 2015.[A182186] Currently approved for the treatment of depression, schizophrenia, and agitation associated with dementia due to Alzheimer’s disease, brexpiprazole has also been investigated in other psychiatric disorders, such as post-traumatic stress disorder.[A7782]

**Indication.** Brexpiprazole is indicated as adjunctive therapy to antidepressants for the treatment of major depressive disorder in adults.[L39568] It is also indicated for the treatment of schizophrenia in patients 13 years of age and older.[L39568]

Brexpiprazole is also indicated for the treatment of agitation associated with dementia due to Alzheimer’s disease; however, it is not indicated as an as-needed (“prn”) treatment for this condition.[L46417]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/1/0 | 0/1/0 | 0/0/8 | not captured | not captured | 27 | 26/0 | 19/8 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span> | [Wang_2023_reference](drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference.md) | Wang (2023) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Higashi_2025_reference](drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_reference.md) | Higashi K et al., Population pharmacokinetics of brexpipr…, Drug metabolism and pharmac… (2025) | [10.1016/j.dmpk.2025.101057](https://doi.org/10.1016/j.dmpk.2025.101057) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Frederiksen_2023_3_reference](drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference.md) | Frederiksen (2023) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Wang_2024](drugs/drug_brexpiprazole/pd_Wang_2024_PANSS.md) | Wang X et al., Exposure-Response Modeling in Adults an…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2464](https://doi.org/10.1002/jcph.2464) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Frederiksen_2023_3](drugs/drug_brexpiprazole/pgx_Frederiksen_2023_3_CYP2D6_Q27.md) | Frederiksen (2023) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Beunk_2024](drugs/drug_brexpiprazole/pgx_Beunk_2024_CYP2D6_Q27.md) | Beunk L et al., Dutch Pharmacogenetics Working Group (D…, European journal of human g… (2024) | [10.1038/s41431-023-01347-3](https://doi.org/10.1038/s41431-023-01347-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP3A4** | `Q27` · CL/F | metabolism | [Beunk_2024](drugs/drug_brexpiprazole/pgx_Beunk_2024_CYP3A4_Q27.md) | Beunk L et al., Dutch Pharmacogenetics Working Group (D…, European journal of human g… (2024) | [10.1038/s41431-023-01347-3](https://doi.org/10.1038/s41431-023-01347-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP3A4** | `Q3` · CLint | metabolism | [Chen_2020](drugs/drug_brexpiprazole/pgx_Chen_2020_CYP3A4_Q3.md) | Chen B et al., Effects of 26 Recombinant CYP3A4 Varian…, Chemical research in toxico… (2020) | [10.1021/acs.chemrestox.9b00186](https://doi.org/10.1021/acs.chemrestox.9b00186) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Elmokadem_2022](drugs/drug_brexpiprazole/pgx_Elmokadem_2022_CYP2D6_Q27.md) | Elmokadem A et al., Brexpiprazole Pharmacokinetics in CYP2D…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1946](https://doi.org/10.1002/jcph.1946) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Frederiksen_2023](drugs/drug_brexpiprazole/pgx_Frederiksen_2023_CYP2D6_Q27.md) | Frederiksen (2023) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Frederiksen_2023_2](drugs/drug_brexpiprazole/pgx_Frederiksen_2023_2_CYP2D6_Q27.md) | Frederiksen (2023) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Ishigooka_2018](drugs/drug_brexpiprazole/pgx_Ishigooka_2018_CYP2D6_Q27.md) | Ishigooka J et al., Pharmacokinetics and Safety of Brexpipr…, Journal of clinical pharmac… (2018) | [10.1002/jcph.979](https://doi.org/10.1002/jcph.979) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brexpiprazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` metabolism/substrate, `CYP3A4` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…25% and 46% of radioactivity was recovered in the urine and feces, respectively. Less than…”</sub> | prose |
| excretion | kidney | `SLC47A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2C (target), CHRM1 (target), DRD2 (partial agonist), DRD3 (partial agonist), HRH1 (target), HTR1A (partial agonist), HTR2A (target), HTR2B (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 89 matched, 57 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alhaj_2025 | not_relevant | 2 | 1 | The paper is a narrative review focusing on drug hypersensitivity reactions (immune-mediated adverse events) rather than quantitative pharmacokinetic or pharmacodynamic parameters of brexpiprazole. |
| PD | Correll_2025 | not_relevant | 0 | 0 | The paper is a systematic review of clinical switching strategies and lists static in vitro receptor binding affinities (Ki), but does not report or estimate population pharmacodynamic models (e.g., Emax, indirect response) or exposure-response relationships for brexpiprazole. |
| PD | DeBattista_2024 | not_relevant | 0 | 0 | The paper is a general review of psychotropic dosing and does not report population pharmacodynamic modeling or exposure-response analysis for brexpiprazole. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The abstract discusses Auvelity and other new agents but does not mention brexpiprazole or any pharmacogenomic effects related to it. |
| popPK | Frederiksen_2023 | irrelevant | not captured | not captured | This review summarizes relative CYP2D6 allele activity scores from cited studies and lacks original or extractable quantitative pharmacokinetic parameters for brexpiprazole. |
| popPK | Frederiksen_2023_2 | irrelevant | not captured | not captured | The paper uses brexpiprazole as a probe substrate to assess interethnic CYP2D6 activity and relies on previously published population PK models without reporting original quantitative disposition parameters. |
| PGx | Grabowski_2025 | not_relevant | 0 | 0 | The text is a general review of pharmacology and schizophrenia symptoms; it mentions CYP enzymes generally but does not report specific pharmacogenomic effects on brexpiprazole PK/PD parameters. |
| PGx | Korošec_2024 | not_relevant | 2 | 1 | The paper reports a patient's genotype (CYP2D6*41) and clinical adverse events to brexpiprazole, but does not report measured pharmacokinetic or pharmacodynamic parameters for brexpiprazole linked to the genotype. |
| PD | Leucht_2020 | not_relevant | 2 | 1 | The paper is a dose-response meta-analysis using regression splines on clinical trial data, not a population pharmacodynamic model linking drug exposure (concentration) to effect with estimated PD parameters. |
| PD | Lin_2025 | not_relevant | 2 | 1 | This is a dose-response meta-analysis of aggregate clinical trial data, not a population pharmacodynamic modeling study estimating individual-level exposure-response parameters (e.g., Emax, EC50) using PK/PD models. |
| PD | Mauri_2018 | not_relevant | 0 | 0 | The text is a review article discussing therapeutic drug monitoring and general pharmacokinetic data, explicitly stating there is no direct evidence for brexpiprazole exposure-response modeling, and it does not report any population PD model or estimated parameters. |
| PGx | McGrane_2018 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between oxcarbazepine and aripiprazole, not a pharmacogenomic effect on brexpiprazole; brexpiprazole is only mentioned in the conclusion as a related drug for future consideration. |
| PD | Nakatsuka_2025 | not_relevant | 1 | 0 | The paper is a preclinical and exploratory clinical study investigating drug interactions between ketamine and antipsychotics (including brexpiprazole) using behavioral tests and Fos mapping, but it does not report a population pharmacodynamic or exposure-response model with estimated parameters for brexpiprazole. |
| popPK | Noriyama_2026 | irrelevant | not captured | not captured | The paper is a retrospective clinical study on treatment continuation and symptom trajectories, containing no pharmacokinetic data or modeling for brexpiprazole. |
| PGx | Sasabe_2021 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interaction potential (inhibition/induction of CYPs and transporters) but does not report on the effect of genetic variants on brexpiprazole pharmacokinetics or pharmacodynamics. |
| PGx | Sasabe_2021_2 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and metabolism (identifying CYP3A4/2D6 involvement) but does not report on the effect of specific gene variants or genotypes on PK/PD parameters. |
| PD | Siwek_2023 | not_relevant | 1 | 0 | The paper is a narrative review summarizing pharmacological profiles and clinical trial results, but it does not report a population pharmacodynamic model or estimated PD parameters. |
| PD | Solmi_2017 | not_relevant | 0 | 0 | The paper is a narrative clinical review summarizing safety and tolerability profiles of antipsychotics, not a population pharmacodynamic modeling study with estimated parameters. |
| PGx | Thakkar_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with fruit juices, not pharmacogenomic effects of gene variants on brexpiprazole PK/PD. |
| PGx | Vasiliu_2023 | not_relevant | 0 | 0 | The text is a general review of pharmacogenetics in psychiatric disorders and mentions brexpiprazole only as an example of a drug metabolized by CYP enzymes, without reporting specific study results or data for it. |
| PD | Wang_2023_2 | not_relevant | 1 | 0 | The paper describes formulation development and preclinical pharmacokinetics in animals, lacking any population pharmacodynamic or exposure-response modeling. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 10:08 UTC</sub>
