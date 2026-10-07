<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;cenobamate&quot;}]"></div>

# cenobamate

- **generic name:** cenobamate
- **ATC codes:** `N03AX25`
- **DrugBank:** [DB06119](https://go.drugbank.com/drugs/DB06119) · **PubChem:** not captured
- **molar mass:** 267.67 g/mol (C10H10ClN5O2) — DrugBank
- **groups:** approved, investigational

## About

Cenobamate is an antiepileptic medicine used to treat epilepsy. It is authorised in the European Union and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27286352](https://www.wikidata.org/wiki/Q27286352) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:35 | 0:59 | 0/0/0 | 1/0/0 | 0/0/4 | 108,055/3,189 | einfracz / qwen3.8-27b | 14 | 3/17 | 13/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Bettio_2025_Fraction_Seizing](drugs/drug_cenobamate/pd_Bettio_2025_Fraction_Seizing.md) | Fraction Seizing ← cenobamate plasma · direct Emax (saturable) effect | — | Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025) | [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Bettio_2025_Fraction_Seizing_2](drugs/drug_cenobamate/pd_Bettio_2025_Fraction_Seizing_2.md) | Fraction Seizing ← cenobamate brain · direct Emax (saturable) effect | — | Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025) | [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Bettio_2025_Fraction_Seizing_3](drugs/drug_cenobamate/pd_Bettio_2025_Fraction_Seizing_3.md) | Fraction Seizing ← cenobamate plasma · direct Emax (saturable) effect | — | Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025) | [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Bettio_2025_Fraction_Seizing_4](drugs/drug_cenobamate/pd_Bettio_2025_Fraction_Seizing_4.md) | Fraction Seizing ← cenobamate brain · direct Emax (saturable) effect | — | Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025) | [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2A6** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2A6_Q27.md) | d'Orsi G et al., Precision management of cenobamate in d…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1830217](https://doi.org/10.3389/fphar.2026.1830217) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2C19_Q27.md) | d'Orsi G et al., Precision management of cenobamate in d…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1830217](https://doi.org/10.3389/fphar.2026.1830217) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2E1** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2E1_Q27.md) | d'Orsi G et al., Precision management of cenobamate in d…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1830217](https://doi.org/10.3389/fphar.2026.1830217) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_UGT2B7_Q27.md) | d'Orsi G et al., Precision management of cenobamate in d…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1830217](https://doi.org/10.3389/fphar.2026.1830217) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cenobamate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate, `UGT2B7` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` metabolism/substrate, `CYP2B6` inducer/inhibitor/substrate, `CYP2C19` inhibitor/metabolism/substrate, `CYP2C8` inducer, `CYP2E1` metabolism/substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT2B7` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT2B7` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (allosteric modulator), SCN1A (inhibitor), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 56 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vashi_2023.pdf` | Vashi V et al., Pharmacokinetics of cenobamate as monot…, Epilepsy research (2023) | popPK | 7 | [10.1016/j.eplepsyres.2023.107185](https://doi.org/10.1016/j.eplepsyres.2023.107185) | [37429218](https://pubmed.ncbi.nlm.nih.gov/37429218) | This is a population PK analysis for cenobamate in humans, but the specific numeric values for clearance (CL), volume, or half-life are not provided in the evidence, only relative effects of co-medications and AUC ratios are reported. |
| `Falcicchio_2026.pdf` | Falcicchio G et al., Early sedation-related adverse events w…, Neurological sciences : off… (2026) | pgx | 8 | [10.1007/s10072-026-09048-7](https://doi.org/10.1007/s10072-026-09048-7) | [42014614](https://www.ncbi.nlm.nih.gov/pubmed/42014614) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Barbieri_2023.pdf` | Barbieri MA et al., Cenobamate: A Review of its Pharmacolog…, CNS & neurological disorder… (2023) | pgx | 7 | [10.2174/1871527321666220113110044](https://doi.org/10.2174/1871527321666220113110044) | [35049441](https://www.ncbi.nlm.nih.gov/pubmed/35049441) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Roberti_2021.pdf` | Roberti R et al., Pharmacology of Cenobamate: Mechanism o…, CNS drugs (2021) | pgx | 7 | [10.1007/s40263-021-00819-8](https://doi.org/10.1007/s40263-021-00819-8) | [33993416](https://www.ncbi.nlm.nih.gov/pubmed/33993416) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:35:04.168100+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Khalil_2022 | irrelevant | 0 | 0 | no_text gate: only 354 chars of text extracted (&lt; 400) |
| PD | Abou-Khalil_2022 | not_relevant | 0 | 0 | The provided text is only the title and publication history of a review article, containing no data, models, or numeric parameters. |
| PGx | Barbieri_2023 | not_relevant | 0 | 0 | The provided text is a general review of cenobamate's pharmacology, efficacy, and safety, and contains no information about pharmacogenomic variations affecting PK or PD parameters. |
| PGx | Becker_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cenobamate inducing CYP3A4 and lowering everolimus levels) but does not report any effect of a gene variant or genotype on the pharmacokinetics or pharmacodynamics of cenobamate. |
| PGx | Bender_2025 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (cenobamate affecting brivaracetam) rather than a pharmacogenomic effect, and explicitly states that genetic testing was not performed. |
| popPK | Bettio_2025 | irrelevant | 5 | 3 | The study reports pharmacodynamic EC50 values and B/P ratios for cenobamate in rodents, but does not provide quantitative disposition parameters (CL, V, ka) or a compartmental PK model. |
| PGx | Charlier_2022 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying cenobamate in plasma and includes a small case report of plasma concentration monitoring, but it does not investigate or report any pharmacogenomic effects (genotypes/variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Choi_2026 | irrelevant | 1 | 0 | The paper is a review of the drug discovery and preclinical profile of cenobamate, focusing on efficacy in animal models and mechanism of action, without reporting quantitative human or animal population pharmacokinetic parameters (CL, V, Q, ka). |
| popPK | Ciullo_2026 | irrelevant | 0 | 0 | The study is a clinical effectiveness trial of clobazam add-on in patients with epilepsy and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for cenobamate. |
| PD | Ciullo_2026 | not_relevant | 3 | 2 | The study is a real-world clinical trial reporting seizure reduction outcomes and a descriptive relationship between clobazam dose and response, but it does not report a pharmacokinetic-pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for cenobamate. |
| PGx | Cohen_2024 | not_relevant | 0 | 0 | The paper evaluates CYP3A induction by various antiseizure medications but does not report pharmacogenomic effects (gene variants) on the PK or PD of cenobamate. |
| PGx | Cohen_2026 | not_relevant | 0 | 0 | The study evaluates enzyme/transporter induction by antiseizure medications but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Dono_2026 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study comparing treatment retention and seizure outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Falcicchio_2026 | not_relevant | 4 | 2 | The paper reports an association between CYP2C19 phenotype and adverse events (PD-like outcome), but does not report specific quantified changes in PK parameters (e.g., AUC, Cmax) or specific PD parameters (e.g., concentration-effect relationship) of cenobamate itself. |
| PGx | Greene_2022 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP induction/inhibition) and does not report pharmacogenomic effects (gene variants) on PK/PD. |
| popPK | Henry_2025 | irrelevant | 0 | 0 | The paper is a methodological review of graphical representations of seizure frequency outcomes in clinical trials and does not report any pharmacokinetic parameters. |
| PD | Henry_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of graphical reporting practices in clinical trials and does not contain any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for cenobamate. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 2 | 0 | This is a review article without original quantitative PK parameter values for cenobamate in the provided evidence. |
| PD | Karaźniewicz-Łada_2021 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetic drug-drug interactions and does not report any pharmacodynamic or exposure-response models for cenobamate. |
| popPK | Kawai_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting seizure frequency reductions and responder rates, containing no pharmacokinetic parameters (CL, V, ka, etc.) for cenobamate. |
| popPK | Krauss_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for focal seizures and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Krauss_2025 | irrelevant | 0 | 0 | The paper is a clinical review focusing on tolerability and dosing strategies, containing no quantitative pharmacokinetic parameters or models for cenobamate. |
| PD | Krauss_2025 | not_relevant | 1 | 0 | The text is a qualitative review of tolerability and dosing strategies for cenobamate and other ASMs, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (seizure frequency reduction, adverse events) rather than pharmacokinetic parameters. |
| PD | Lee_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (seizure frequency reduction) in an open-label extension study but does not provide pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PGx | Martins_2026 | not_relevant | 0 | 0 | The paper is a pipeline review that mentions cenobamate only as a benchmark for dual-mechanism ASMs and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Mateias_2024 | irrelevant | 0 | 0 | The paper is an in vitro cardiac safety pharmacology study reporting ion channel IC50 values and electrophysiological effects, not population pharmacokinetic disposition parameters. |
| popPK | Osborn_2023 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic interaction and clinical response to clobazam, reporting only qualitative changes in the N-desmethylclobazam/clobazam ratio without providing quantitative pharmacokinetic parameters (CL, V, ka) for cenobamate. |
| PD | Osborn_2023 | not_relevant | 3 | 2 | The paper reports qualitative observations of sedation onset and seizure response at specific dose ranges (25-100 mg) but does not provide a quantitative concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for cenobamate. |
| popPK | Poza_2026 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical efficacy and adverse effects, containing no quantitative pharmacokinetic parameters or models for cenobamate. |
| PD | Poza_2026 | not_relevant | 1 | 0 | The text is a qualitative review discussing clinical efficacy and general pharmacodynamic interactions without reporting any numeric PD parameters or exposure-response data. |
| popPK | Roberti_2021 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Roberti_2021 | not_relevant | 2 | 0 | The paper is a review of pharmacology, PK, and tolerability, and does not report specific numeric PD parameters (e.g., EC50, Emax) or an extractable exposure-response curve for cenobamate. |
| PGx | Roberti_2021 | not_relevant | 2 | 5 | The paper reviews general pharmacology and PK of cenobamate but does not report specific pharmacogenomic effects (gene variants changing PK/PD). |
| popPK | Sammarra_2026 | irrelevant | 0 | 0 | The paper is a neuropsychological/psychopathological study assessing cognitive and emotional outcomes, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for cenobamate. |
| popPK | Serratosa_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting seizure-free days and retention rates, containing no pharmacokinetic parameters or disposition data for cenobamate. |
| PD | Serratosa_2026 | not_relevant | 1 | 0 | The paper reports clinical outcomes (seizure-free days) by responder groups but does not provide drug concentrations, dose levels, or numeric PD parameters (e.g., Emax, EC50) to establish an exposure-response or dose-response relationship. |
| popPK | Sharma_2020 | irrelevant | 0 | 0 | The study describes in vitro electrophysiological mechanisms of action (GABA modulation) and does not report any pharmacokinetic parameters. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The paper is a clinical consensus guideline for dose adjustments of concomitant medications and does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for cenobamate. |
| PD | Smith_2022 | not_relevant | 1 | 0 | The paper is an expert consensus on dose adjustments for concomitant medications and does not report any quantitative pharmacodynamic or exposure-response analysis for cenobamate. |
| popPK | Steinhoff_2024 | irrelevant | 0 | 0 | The paper is a Delphi panel consensus on clinical management strategies and does not report original quantitative pharmacokinetic parameters for cenobamate. |
| PD | Steinhoff_2024 | not_relevant | 0 | 0 | The paper is a Delphi consensus report on clinical management strategies and does not present any pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Stoschus_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenobarbital, not cenobamate. |
| PD | Stoschus_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for phenobarbital, not a pharmacodynamic (PD) or exposure-response model for cenobamate; cenobamate is only listed as a covariate. |
| popPK | Strzelczyk_2020 | irrelevant | 2 | 0 | The paper is a review article summarizing existing data and does not present original quantitative pharmacokinetic parameter values in the provided evidence. |
| PD | Strzelczyk_2020 | not_relevant | 2 | 1 | The text is a review summary that mentions pharmacodynamics and efficacy ranges but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data. |
| popPK | Vashi_2023 | relevant | 7 | 2 | This is a population PK analysis for cenobamate in humans, but the specific numeric values for clearance (CL), volume, or half-life are not provided in the evidence, only relative effects of co-medications and AUC ratios are reported. |
| popPK | Vlakou_2025 | irrelevant | 0 | 0 | The paper is a case report and systematic review focused on clinical efficacy and seizure outcomes, containing no pharmacokinetic parameters or quantitative disposition data for cenobamate. |
| PD | Vlakou_2025 | not_relevant | 2 | 0 | The paper is a case report and systematic review summarizing clinical seizure outcomes (percentages of reduction/freedom) and adverse events, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect/dose-response curves. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting seizure frequency and responder rates, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Wu_2025 | not_relevant | 3 | 2 | The paper reports clinical dose-response efficacy data (seizure frequency reduction by dose) but does not provide pharmacokinetic data or a formal PK/PD model with numeric parameters like EC50 or Emax. |
| PGx | Zaccara_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and pharmacokinetics but does not report any pharmacogenomic effects (gene variants) on cenobamate parameters. |
| PGx | Zillgitt_2025 | not_relevant | 2 | 3 | The paper reports a pharmacogenomic effect (CYP2C19) on the PK of clobazam (specifically its metabolite N-desmethylclobazam), not cenobamate, although cenobamate is mentioned as a co-medication. |
| PGx | dOrsi_2026_2 | not_relevant | 0 | 0 | The provided text is a correction notice for a missing acknowledgements section and does not report pharmacogenomic findings for cenobamate. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no specific data, models, or parameters for cenobamate. |
| popPK | Şulea_2025 | irrelevant | 0 | 0 | The paper is a mechanistic in-silico study (molecular docking/MD) of cenobamate binding to Nav1.5 channels, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Şulea_2025 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and computational binding affinities (Kd) for Nav1.5, but lacks an in vivo or clinical exposure-response (PK/PD) analysis with numeric PD parameters like Emax or EC50 derived from concentration-effect data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
