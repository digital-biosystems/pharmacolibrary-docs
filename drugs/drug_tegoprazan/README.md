<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;tegoprazan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegoprazan_Kim2024_reference&quot;,&quot;label&quot;:&quot;Kim_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegoprazan/Tegoprazan_Kim2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tegoprazan

- **generic name:** tegoprazan
- **ATC codes:** `A02BC09`
- **DrugBank:** [DB16690](https://go.drugbank.com/drugs/DB16690) · **PubChem:** not captured
- **molar mass:** 387.387 g/mol (C20H19F2N3O3) — DrugBank
- **groups:** investigational

## About

Tegoprazan is a potassium-competitive acid blocker investigated for acid-related digestive disorders such as gastro-oesophageal reflux disease and peptic ulcer. It is not authorised in the European Union and remains investigational according to DrugBank, though it has been marketed in some Asian countries under the name K-CAB.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27292116](https://www.wikidata.org/wiki/Q27292116) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tegoprazan | parent | 387.387 | C20H19F2N3O3 | DrugBank | — | He_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:59 | 15:29 | 1/1/1 | 2/0/0 | 0/0/1 | 296,093/39,685 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 0/18 | 18/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.615). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kim_2024_reference](drugs/drug_tegoprazan/Tegoprazan_Kim2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Kim HS et al., Enhancing drug administration flexibili…, Translational and clinical… (2024) | [10.12793/tcp.2024.32.e9](https://doi.org/10.12793/tcp.2024.32.e9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [He_2021_reference](drugs/drug_tegoprazan/Tegoprazan_He2021_reference.md) | — | 1-compartment (no model) | 5 | He J et al., Safety, Tolerability and Pharmacokineti…, Clinical drug investigation (2021) | [10.1007/s40261-020-00986-4](https://doi.org/10.1007/s40261-020-00986-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jung_2026_reference](drugs/drug_tegoprazan/Tegoprazan_Jung2026_reference.md) | — | 1-compartment (no model) | 0 | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.828). The first reading is what the record holds.">cross-check: disputed</span> | [Jeong_2022_pH](drugs/drug_tegoprazan/pd_Jeong_2022_pH.md) | intragastric pH ← tegoprazan · indirect response — drug inhibits the production of intragastric pH | — | Jeong HC et al., Integration of a Physiologically Based…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061298](https://doi.org/10.3390/pharmaceutics14061298) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jung_2026_pH](drugs/drug_tegoprazan/pd_Jung_2026_pH.md) | intragastric pH ← tegoprazan · indirect response — drug stimulates the production of intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Yang_2022](drugs/drug_tegoprazan/pgx_Yang_2022_CYP2C19_Q100.md) | Yang E et al., Night-time gastric acid suppression by…, British journal of clinical… (2022) | [10.1111/bcp.15268](https://doi.org/10.1111/bcp.15268) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tegoprazan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2021.pdf` | He J et al., Safety, Tolerability and Pharmacokineti…, Clinical drug investigation (2021) | popPK | 10 | [10.1007/s40261-020-00986-4](https://doi.org/10.1007/s40261-020-00986-4) | [33355910](https://pubmed.ncbi.nlm.nih.gov/33355910) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for tegoprazan in humans, though specific compartmental model parameters (CL, V, Q) are not explicitly listed in the provided text. |
| `Wang_2025.pdf` | Wang W et al., Tegoprazan: a novel, highly selective,…, European journal of clinica… (2025) | pgx | 8 | [10.1007/s00228-025-03850-6](https://doi.org/10.1007/s00228-025-03850-6) | [40442337](https://www.ncbi.nlm.nih.gov/pubmed/40442337) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Carrasco-Portugal_2026.pdf` | Carrasco-Portugal MDC et al., Pharmacokinetics of the potassium-compe…, International journal of cl… (2026) | pgx | 7 | [10.5414/CP204709](https://doi.org/10.5414/CP204709) | [41553168](https://www.ncbi.nlm.nih.gov/pubmed/41553168) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2025.pdf` | Lee J et al., Potassium-competitive acid blocker vs p…, American heart journal (2025) | pgx | 5 | [10.1016/j.ahj.2025.04.001](https://doi.org/10.1016/j.ahj.2025.04.001) | [40188976](https://www.ncbi.nlm.nih.gov/pubmed/40188976) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-04T11:44:33.194185+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahn_2023 | not_relevant | 0 | 0 | The paper discusses CYP2C19 polymorphism in the context of PPIs and mentions it as a factor for future studies on tegoprazan, but it does not report any pharmacogenomic effect on tegoprazan's PK or PD parameters. |
| PGx | Bandyopadhyay_2026 | not_relevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety outcomes for tegoprazan and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Carrasco-Portugal_2026 | not_relevant | 0 | 0 | The study compares pharmacokinetics between two ethnic populations (Mexicans vs. Koreans) without genotyping or analyzing specific gene variants. |
| PGx | Cho_2023 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing efficacy and safety, with a subgroup analysis on CYP2C19 genotypes for efficacy, but does not report pharmacokinetic or pharmacodynamic parameters. |
| PGx | Choi_2022 | not_relevant | 0 | 0 | The paper is a general review of potassium-competitive acid blockers and does not report specific pharmacogenomic effects on tegoprazan PK/PD parameters. |
| PGx | Choi_2022_2 | not_relevant | 0 | 0 | The paper reports clinical efficacy (H. pylori eradication rates) and does not measure or report pharmacokinetic or pharmacodynamic parameters of tegoprazan. |
| PGx | Hussaini_2025 | not_relevant | 2 | 0 | The paper mentions that tegoprazan's efficacy is independent of CYP2C19 genotype, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by the variant. |
| PGx | Lee_2025 | not_relevant | 0 | 0 | The paper is a trial design/rationale document for a clinical trial comparing tegoprazan and rabeprazole, and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food-drug interactions for P-CABs and does not report pharmacogenomic effects (gene variants) on tegoprazan PK/PD. |
| PGx | Ngo_2023 | not_relevant | 0 | 0 | The paper reports a PBPK model for drug-drug interactions (CYP3A4 inhibitors/inducers) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Ranbhise_2026 | not_relevant | 0 | 0 | The paper is a review that highlights the genotype-independent nature of P-CABs (like tegoprazan) compared to PPIs, but it does not report specific pharmacogenomic effects or quantitative PK/PD changes for tegoprazan. |
| PGx | Remes-Troche_2024 | not_relevant | 0 | 0 | The paper is a general review of P-CABs and does not report any pharmacogenomic effects or gene variant associations for tegoprazan. |
| PGx | Shin_2025 | not_relevant | 2 | 2 | The paper reports clinical efficacy (healing rates) by CYP2C19 genotype but does not report pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, pH). |
| PGx | Wang_2025 | not_relevant | 2 | 0 | The paper is a general review that mentions CYP2C19 polymorphism does not affect Tegoprazan's efficacy, but it does not report specific pharmacogenomic effect sizes or detailed PK/PD parameter changes linked to genotypes. |
| popPK | Wei_2023 | relevant | 8 | 4 | The paper reports a PBPK model for tegoprazan with specific input parameters (ka, Vss, intrinsic clearance) and validation metrics, but the primary disposition parameters (CL, V) are not explicitly listed as final values in the provided text, only ratios and inputs. |
| PD | Wei_2023 | not_relevant | 4 | 3 | The paper uses a PBPK/PD model to predict DDI effects on intragastric pH, but the provided text only contains PK parameter tables and qualitative descriptions of PD endpoints; it does not report the specific numeric PD parameters (e.g., Emax, EC50, Ki) or the underlying concentration-effect curve equations required to extract a PD relationship. |
| PGx | Wei_2023 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDI) using PBPK/PD modeling, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (CYP2C19 inhibition) in a homogeneous population of CYP2C19 extensive metabolizers, not a pharmacogenomic effect of a gene variant on the PK/PD of tegoprazan. |
| PGx | Yoon_2021 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for drug-drug interactions (CYP3A4 inhibitors/inducers) and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 11:44 UTC</sub>
