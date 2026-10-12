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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kim_2024_reference](drugs/drug_tegoprazan/Tegoprazan_Kim2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Kim HS et al., Enhancing drug administration flexibili…, Translational and clinical… (2024) | [10.12793/tcp.2024.32.e9](https://doi.org/10.12793/tcp.2024.32.e9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [He_2021_reference](drugs/drug_tegoprazan/Tegoprazan_He2021_reference.md) | — | 1-compartment (no model) | 5 | He J et al., Safety, Tolerability and Pharmacokineti…, Clinical drug investigation (2021) | [10.1007/s40261-020-00986-4](https://doi.org/10.1007/s40261-020-00986-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jung_2026_reference](drugs/drug_tegoprazan/Tegoprazan_Jung2026_reference.md) | — | 1-compartment (no model) | 0 | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Jeong_2022_pH](drugs/drug_tegoprazan/pd_Jeong_2022_pH.md) | intragastric pH ← tegoprazan · indirect response — drug inhibits the production of intragastric pH | — | Jeong HC et al., Integration of a Physiologically Based…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061298](https://doi.org/10.3390/pharmaceutics14061298) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span> | [Jung_2026_pH](drugs/drug_tegoprazan/pd_Jung_2026_pH.md) | intragastric pH ← tegoprazan · indirect response — drug stimulates the production of intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Yang_2022](drugs/drug_tegoprazan/pgx_Yang_2022_CYP2C19_Q100.md) | Yang E et al., Night-time gastric acid suppression by…, British journal of clinical… (2022) | [10.1111/bcp.15268](https://doi.org/10.1111/bcp.15268) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
