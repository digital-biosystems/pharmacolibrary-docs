<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;vildagliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vildagliptin_Dias2026_reference&quot;,&quot;label&quot;:&quot;Dias_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# vildagliptin

- **generic name:** vildagliptin
- **ATC codes:** `A10BD08`, `A10BH02`
- **DrugBank:** [DB04876](https://go.drugbank.com/drugs/DB04876) · **PubChem:** [CID 6918537](https://pubchem.ncbi.nlm.nih.gov/compound/6918537)
- **molar mass:** 303.3993 g/mol (C17H25N3O2) — DrugBank
- **groups:** approved, investigational

## About

Vildagliptin is a DPP-4 inhibitor used to lower blood glucose in adults with type 2 diabetes. It is authorised in the European Union and widely used as an oral diabetes medicine, often in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421042](https://www.wikidata.org/wiki/Q421042) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vildagliptin | parent | 303.399 | C17H25N3O2 | DrugBank | [6918537](https://pubchem.ncbi.nlm.nih.gov/compound/6918537) | Dias_2026, He_2007_2, Landersdorfer_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:23 | 1:46 | 0/1/2 | 0/0/0 | 0/0/1 | 145,292/8,826 | einfracz / qwen3.8-27b | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Dias_2026_reference](drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Dias BB et al., Preclinical Modeling and Simulation to…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70165](https://doi.org/10.1002/psp4.70165) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8), gpt-oss:120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [He_2007_2_reference](drugs/drug_vildagliptin/Vildagliptin_He2007v2_reference.md) | — | 1-compartment (no model) | 4 | He YL et al., The absolute oral bioavailability and p…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746090-00006](https://doi.org/10.2165/00003088-200746090-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556), gpt-oss:120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Landersdorfer_2012_reference](drugs/drug_vildagliptin/Vildagliptin_Landersdorfer2012_reference.md) | — | general linear (no model) | 3 | Landersdorfer CB et al., Mechanism-based population pharmacokine…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2011.04108.x](https://doi.org/10.1111/j.1365-2125.2011.04108.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CREBRF** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Toomata_2025](drugs/drug_vildagliptin/pgx_Toomata_2025_CREBRF_Q100.md) | Toomata ZLL et al., Reduced Weight Gain with Pioglitazone v…, Diabetes, metabolic syndrom… (2025) | [10.2147/DMSO.S500336](https://doi.org/10.2147/DMSO.S500336) |

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

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2007_2.pdf` | He YL et al., The absolute oral bioavailability and p…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746090-00006](https://doi.org/10.2165/00003088-200746090-00006) | [17713976](https://pubmed.ncbi.nlm.nih.gov/17713976) | The abstract provides explicit quantitative PK parameters including total systemic clearance (41 L/h), renal clearance (13 L/h), absorption rate constants, and bioavailability for vildagliptin in humans. |
| `Landersdorfer_2012.pdf` | Landersdorfer CB et al., Mechanism-based population pharmacokine…, British journal of clinical… (2012) | popPK | 10 | [10.1111/j.1365-2125.2011.04108.x](https://doi.org/10.1111/j.1365-2125.2011.04108.x) | [22442826](https://pubmed.ncbi.nlm.nih.gov/22442826) | The paper reports quantitative population pharmacokinetic parameters (clearance, volume, half-lives) for vildagliptin in humans with values explicitly provided in the abstract. |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:22:02.825676+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chitnis_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin as the subject drug for bioequivalence, while vildagliptin is only a component of the formulation and not the subject of PK modeling or reporting. |
| popPK | Fang_2020 | irrelevant | 0 | 0 | The paper focuses on the design and synthesis of new DPP-4 inhibitors and compares their glucose-lowering efficacy in mice to vildagliptin, but does not report pharmacokinetic parameters for vildagliptin. |
| PD | Fang_2020 | not_relevant | 1 | 0 | The paper reports in vitro potency (EC50) and a single-point in vivo efficacy comparison (AUC reduction) for a new compound against vildagliptin, but does not provide an exposure-response or dose-response curve or numeric PD parameters for vildagliptin. |
| popPK | Fang_2020_2 | irrelevant | 0 | 0 | The study focuses on the development of GPR119 agonists and uses vildagliptin only as a reference for hypoglycemic effect, without reporting any pharmacokinetic parameters. |
| PD | Fang_2020_2 | not_relevant | 2 | 1 | The paper reports in vitro EC50 values for novel GPR119 agonists and a single-point in vivo efficacy comparison against vildagliptin, but does not provide a dose-response curve or numeric PD parameters for vildagliptin itself. |
| popPK | Gibbs_2012 | irrelevant | 2 | 0 | The paper is a pharmacodynamic meta-analysis modeling HbA1c response to DPP-4 inhibitors, not a study reporting quantitative pharmacokinetic parameters (CL, V, ka) for vildagliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper is a review comparing the general pharmacokinetics of DPP-4 inhibitors and does not report any specific gene variants or genotypes affecting vildagliptin. |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study evaluates the dose-response relationship of DPP-4 inhibitors on HbA1c levels using machine learning models and does not report any pharmacokinetic parameters (e.g., CL, V, ka) for vildagliptin. |
| PGx | He_2012 | not_relevant | 0 | 0 | The paper describes general PK/PD and notes that ethnicity does not influence PK/PD, but it does not report specific pharmacogenomic variants or gene-based effects. |
| popPK | Horie_2014 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (insulin sensitivity, C-peptide secretion) and clinical outcomes, not vildagliptin pharmacokinetic parameters (CL, V, ka). |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 polymorphism is unlikely to affect the response to vildagliptin because the liver is not important for its elimination or action. |
| popPK | Landersdorfer_2012_2 | irrelevant | 3 | 0 | The study focuses on a mechanism-based population pharmacodynamic (PD) model for GLP-1, glucose, and insulin, and while vildagliptin concentrations were co-modelled, no quantitative PK parameter values (CL, V, etc.) are reported in the provided evidence. |
| popPK | Madny_2022 | irrelevant | 2 | 0 | The study uses a physiologically based biopharmaceutics model to predict PK parameters for a new formulation, but the specific numeric parameter values for vildagliptin are not present in the provided evidence text. |
| PGx | Mostafa_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction between vildagliptin and pravastatin in a cell model, but does not report any genetic variants or genotypes affecting vildagliptin's PK or PD. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for DPP-4 inhibitors and does not report pharmacogenomic effects (gene variants) on the PK/PD of vildagliptin. |
| popPK | Tatosian_2013 | irrelevant | 2 | 0 | The study is primarily a pharmacodynamic comparison of DPP-4 inhibition; while it mentions non-compartmental PK analysis, the table containing the specific vildagliptin PK values (Cmax, AUC, half-life) is truncated in the provided evidence. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new dual-target compounds and does not report population-pharmacokinetic parameters for vildagliptin. |
| PD | Yang_2025 | not_relevant | 2 | 1 | The paper reports in vitro potency (IC50/EC50) for a new dual-target compound, not a pharmacodynamic exposure-response or dose-response relationship for vildagliptin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:22 UTC</sub>
