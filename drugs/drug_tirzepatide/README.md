<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;tirzepatide&quot;}]"></div>

# tirzepatide

- **generic name:** tirzepatide
- **ATC codes:** `A10BX16`
- **DrugBank:** [DB15171](https://go.drugbank.com/drugs/DB15171) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Tirzepatide is a novel dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist. Dual GIP/GLP-1 agonists gained increasing attention as new therapeutic agents for glycemic and weight control as they demonstrated better glucose control and weight loss compared to selective GLP-1 receptor agonists in preclinical and clinical trials.[A246260]

Tirzepatide comprises a 39 amino acid linear synthetic peptide conjugated to a C20 fatty diacid moiety.[A246260] Its protein sequence was based on the sequence of endogenous GIP, and its pharmacological action on GLP-1 receptors is comparable to endogenous GIP; however, the long half-life of tirzepatide allows for once-weekly dosing.[A246265] Tirzepatide was approved by the FDA on May 13, 2022, under the brand name MOUNJARO by the FDA for the treatment of adults with type 2 diabetes, making it the first and only GIP and GLP-1 receptor agonist for this indication.[L41820] Later, it was approved under a different brand name ZEPBOUND on November 8, 2023, for the chronic weight management in adults with obesity or overweight with at least one weight-related condition.[L48766] On September 15, 2022, tirzepatide was also approved by the European Commission.[L44386]. On November 02, 2023, tirzepatide was also approved by the Health Canada [L52800]

**Indication.** Tirzepatide is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus or for chronic weight management in obese or overweight adult patients with at least one weight-related comorbid condition.[L41815,L44376,L52325] In Europe, it may be used as monotherapy or in combination with other drugs used to treat diabetes.[L44376]

Tirzepatide is also indicated for the treatment of moderate-to-severe obstructive sleep apnea in adult patients with obesity.[L52325]

This drug has not been studied in patients with a history of pancreatitis. Tirzepatide is not indicated for use in patients with type 1 diabetes mellitus.[L41815]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tirzepatide | parent | 4813.53 | C225H348N48O68 | PubChem | [163285897](https://pubchem.ncbi.nlm.nih.gov/compound/163285897) | Schneck_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 17:03 | 6:49 | 0/1/0 | 1/0/0 | 0/0/5 | 151,208/13,262 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/10 | 10/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Schneck_2024_reference](drugs/drug_tirzepatide/Tirzepatide_Schneck2024_reference.md) | — | 2-compartment (no model) | 0 | Schneck K et al., Population pharmacokinetics of the GIP/…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13099](https://doi.org/10.1002/psp4.13099) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Chigutsa_2025_FFM](drugs/drug_tirzepatide/pd_Chigutsa_2025_FFM.md) | fat-free mass ← tirzepatide · indirect response — drug inhibits the production of fat-free mass | — | Chigutsa E et al., A Pharmacometric Method for Quantitativ…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3750](https://doi.org/10.1002/cpt.3750) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chigutsa_2025_fat_mass](drugs/drug_tirzepatide/pd_Chigutsa_2025_fat_mass.md) | fat mass ← tirzepatide · indirect response — drug inhibits the production of fat mass | — | Chigutsa E et al., A Pharmacometric Method for Quantitativ…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3750](https://doi.org/10.1002/cpt.3750) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **APOE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_APOE_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **GLP1R** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_GLP1R_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **IL6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_IL6_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **GIPR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Su_2026](drugs/drug_tirzepatide/pgx_Su_2026_GIPR_Q100.md) | Su QJ et al., Genetic predictors of GLP1 receptor ago…, Nature (2026) | [10.1038/s41586-026-10330-z](https://doi.org/10.1038/s41586-026-10330-z) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **GLP1R** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Su_2026](drugs/drug_tirzepatide/pgx_Su_2026_GLP1R_Q100.md) | Su QJ et al., Genetic predictors of GLP1 receptor ago…, Nature (2026) | [10.1038/s41586-026-10330-z](https://doi.org/10.1038/s41586-026-10330-z) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tirzepatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>“…and feces…”</sub> | prose |
| excretion | kidney | <sub>“…primarily excreted via urine…”</sub> | prose |

<sub>Actors without a tissue in the table: APOE (target), GIPR (target), GLP1R (target), IL6 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 7  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aminorroaya_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of cardiometabolic efficacy outcomes (metabolic syndrome, BMI, lipids) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tirzepatide. |
| popPK | Barrett_2025 | irrelevant | 0 | 0 | The study is a health economics and outcomes research analysis comparing weight loss and costs, containing no pharmacokinetic parameters for tirzepatide. |
| popPK | Borlaug_2025 | irrelevant | 0 | 0 | The paper is a clinical outcome analysis of the SUMMIT trial focusing on heart failure endpoints and weight loss, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for tirzepatide. |
| popPK | Chigutsa_2025 | relevant | 8 | 2 | The paper describes a population PK/PD model for tirzepatide in humans and provides the NONMEM code with fixed allometric exponents, but the specific numeric population parameter estimates (PCL, PV2, etc.) are in Table 1 which is not included in the evidence. |
| popPK | Garg_2025 | irrelevant | 0 | 0 | The study is a retrospective chart review of clinical outcomes (weight, HbA1c, biomarkers) and does not report any pharmacokinetic parameters for tirzepatide. |
| popPK | Gonzalez_2026 | irrelevant | 0 | 0 | The study is a clinical retrospective cohort analyzing glycemic and weight outcomes, not a pharmacokinetic study reporting disposition parameters for tirzepatide. |
| PGx | Kuryłowicz_2026 | not_relevant | 2 | 0 | The paper is a narrative review that mentions a GWAS finding regarding GLP1R/GIPR variants and response/tolerability, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, receptor binding) for tirzepatide, nor does it provide fitted effect sizes. |
| PGx | Lang_2026 | not_relevant | 0 | 0 | The paper is a clinical case series reporting weight loss outcomes in patients with hypothalamic obesity and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Nicze_2026 | not_relevant | 2 | 3 | The paper is a narrative review discussing general factors in obesity treatment failure and mentions pharmacogenomic variants qualitatively, but it does not report specific quantitative PK/PD parameter changes for tirzepatide. |
| PGx | Shin_2026 | not_relevant | 3 | 2 | The paper is a narrative review discussing genetic predictors of clinical efficacy (glycemic/weight response) rather than reporting specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, receptor occupancy) linked to genotypes. |
| popPK | Sikorska_2026 | irrelevant | 0 | 0 | The paper is a clinical service evaluation reporting weight loss and metabolic outcomes, containing no pharmacokinetic parameters (CL, V, ka, etc.) for tirzepatide. |
| PGx | Song_2025 | not_relevant | 2 | 2 | The paper is a review that discusses hypothetical gene-disease-drug interaction models and qualitative associations (e.g., reduced weight loss) without reporting fitted quantitative pharmacokinetic or pharmacodynamic effect sizes for specific variants. |
| PGx | Yamanouchi_2025 | not_relevant | 0 | 0 | The paper is a comprehensive review of incretin physiology and cardiovascular effects, mentioning tirzepatide only as a therapeutic example without reporting any pharmacogenomic data or genotype-specific PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-01 16:57 UTC</sub>
