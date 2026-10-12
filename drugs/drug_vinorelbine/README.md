<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinorelbine&quot;}]"></div>

# vinorelbine

- **generic name:** vinorelbine
- **ATC codes:** `L01CA04`
- **DrugBank:** [DB00361](https://go.drugbank.com/drugs/DB00361) · **PubChem:** [CID 44424639](https://pubchem.ncbi.nlm.nih.gov/compound/44424639)
- **molar mass:** 778.947 g/mol (C45H54N4O8) — DrugBank
- **groups:** approved, investigational

## About

Vinorelbine, a Vinca alkaloid, is an anticancer medicine used to treat breast cancer, ovarian cancer, non-small-cell lung carcinoma, and mixed-cellularity Hodgkin's lymphoma. It is an approved medicine and is included on the WHO list of essential medicines, indicating broad international use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420532](https://www.wikidata.org/wiki/Q420532) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vinorelbine | parent | 778.947 | C45H54N4O8 | DrugBank | [44424639](https://pubchem.ncbi.nlm.nih.gov/compound/44424639) | Gauvin_2002, Nguyen_2002, Pétain_2019, Variol_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:21 | 7:46 | 0/3/3 | 0/0/0 | 0/0/2 | 111,508/31,519 | openai / gpt-6-luna | 9 | 4/5 | 7/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gauvin_2002_reference](drugs/drug_vinorelbine/Vinorelbine_Gauvin2002_reference.md) | — | 1-compartment (no model) | 3 | Gauvin A et al., Blood and plasma pharmacokinetics of vi…, Cancer chemotherapy and pha… (2002) | [10.1007/s00280-001-0378-2](https://doi.org/10.1007/s00280-001-0378-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Pétain_2019_intravenous_vinorelbine](drugs/drug_vinorelbine/Vinorelbine_Ptain2019_intravenous_vinorelbine.md) | — | 1-compartment (no model) | 2 | Pétain A et al., Effect of ethnicity on vinorelbine phar…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03872-9](https://doi.org/10.1007/s00280-019-03872-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Pétain_2019_oral_vinorelbine](drugs/drug_vinorelbine/Vinorelbine_Ptain2019_oral_vinorelbine.md) | — | 1-compartment (no model) | 2 | Pétain A et al., Effect of ethnicity on vinorelbine phar…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03872-9](https://doi.org/10.1007/s00280-019-03872-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Deporte-Fety_2004_reference](drugs/drug_vinorelbine/Vinorelbine_DeporteFety2004_reference.md) | — | 1-compartment (no model) | 0 | Deporte-Fety R et al., Population pharmacokinetics of short in…, Cancer chemotherapy and pha… (2004) | [10.1007/s00280-003-0729-2](https://doi.org/10.1007/s00280-003-0729-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nguyen_2002_reference](drugs/drug_vinorelbine/Vinorelbine_Nguyen2002_reference.md) | — | 1-compartment (no model) | 0 | Nguyen L et al., Population pharmacokinetics model and l…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01581.x](https://doi.org/10.1046/j.1365-2125.2002.01581.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Variol_2002_reference](drugs/drug_vinorelbine/Vinorelbine_Variol2002_reference.md) | — | 1-compartment (no model) | 1 | Variol P et al., A simultaneous oral/intravenous populat…, European journal of clinica… (2002) | [10.1007/s00228-002-0506-x](https://doi.org/10.1007/s00228-002-0506-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **TP53** | `Q322` · IC50 | unknown | [Chiu_2019](drugs/drug_vinorelbine/pgx_Chiu_2019_TP53_Q322.md) | Chiu YC et al., Predicting drug response of tumors from…, BMC medical genomics 12(Sup… (2019) | [10.1186/s12920-018-0460-9](https://doi.org/10.1186/s12920-018-0460-9) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **TTN** | `Q322` · IC50 | unknown | [Chiu_2019](drugs/drug_vinorelbine/pgx_Chiu_2019_TTN_Q322.md) | Chiu YC et al., Predicting drug response of tumors from…, BMC medical genomics 12(Sup… (2019) | [10.1186/s12920-018-0460-9](https://doi.org/10.1186/s12920-018-0460-9) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vinorelbine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BCL2 (downregulator), MAP4 (modulator), MAPK1 (activator), TP53 (unknown), TTN (unknown), TUBB (inhibitor), TUBB (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 122 matched, 56 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 6  ·  extracted 0  ·  needs_review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deporte-Fety_2004.pdf` | Deporte-Fety R et al., Population pharmacokinetics of short in…, Cancer chemotherapy and pha… (2004) | popPK | 10 | [10.1007/s00280-003-0729-2](https://doi.org/10.1007/s00280-003-0729-2) | [14634791](https://pubmed.ncbi.nlm.nih.gov/14634791) | Human population-PK model reports numeric vinorelbine clearance and central volume. |
| `Gauvin_2002.pdf` | Gauvin A et al., Blood and plasma pharmacokinetics of vi…, Cancer chemotherapy and pha… (2002) | popPK | 10 | [10.1007/s00280-001-0378-2](https://doi.org/10.1007/s00280-001-0378-2) | [11855752](https://pubmed.ncbi.nlm.nih.gov/11855752) | Human vinorelbine pharmacokinetics are modeled and numeric clearance and terminal half-life values are reported. |
| `Hamimed_2022.pdf` | Hamimed M et al., Pharmacokinetics of oral vinorelbine in…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15131](https://doi.org/10.1111/bcp.15131) | [34709655](https://pubmed.ncbi.nlm.nih.gov/34709655) | Human pediatric vinorelbine PK parameters and numeric values are reported in the evidence. |
| `Nguyen_2002.pdf` | Nguyen L et al., Population pharmacokinetics model and l…, British journal of clinical… (2002) | popPK | 10 | [10.1046/j.1365-2125.2002.01581.x](https://doi.org/10.1046/j.1365-2125.2002.01581.x) | [11994051](https://pubmed.ncbi.nlm.nih.gov/11994051) | Human population PK model reports numeric vinorelbine clearance and covariate relationships in the provided evidence. |
| `Variol_2002.pdf` | Variol P et al., A simultaneous oral/intravenous populat…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0506-x](https://doi.org/10.1007/s00228-002-0506-x) | [12389069](https://pubmed.ncbi.nlm.nih.gov/12389069) | Human population-PK model reports three compartments and numeric bioavailability and variability estimates. |
| `Ferrero_2002.pdf` | Ferrero JM et al., The raltitrexed-vinorelbine combination…, Cancer chemotherapy and pha… (2002) | pd | 5 | [10.1007/s00280-002-0519-2](https://doi.org/10.1007/s00280-002-0519-2) | [12451472](https://www.ncbi.nlm.nih.gov/pubmed/12451472) | metadata signals extractable PD data (Emax) |
| `Puisset_2005.pdf` | Puisset F et al., Dexamethasone as a probe for vinorelbin…, British journal of clinical… (2005) | pgx | 8 | [10.1111/j.1365-2125.2005.02384.x](https://doi.org/10.1111/j.1365-2125.2005.02384.x) | [15963093](https://www.ncbi.nlm.nih.gov/pubmed/15963093) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Schott_2006.pdf` | Schott AF et al., Combination vinorelbine and capecitabin…, Cancer chemotherapy and pha… (2006) | pgx | 8 | [10.1007/s00280-005-0132-2](https://doi.org/10.1007/s00280-005-0132-2) | [16283312](https://www.ncbi.nlm.nih.gov/pubmed/16283312) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Tan_2008.pdf` | Tan SH et al., Pharmacogenetics in breast cancer thera…, Clinical cancer research :… (2008) | pgx | 8 | [10.1158/1078-0432.CCR-08-0993](https://doi.org/10.1158/1078-0432.CCR-08-0993) | [19088019](https://www.ncbi.nlm.nih.gov/pubmed/19088019) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wong_2006.pdf` | Wong M et al., Predictors of vinorelbine pharmacokinet…, Journal of clinical oncolog… (2006) | pgx | 8 | [10.1200/JCO.2005.02.1295](https://doi.org/10.1200/JCO.2005.02.1295) | [16651648](https://www.ncbi.nlm.nih.gov/pubmed/16651648) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Loos_2007.pdf` | Loos WJ et al., Aprepitant when added to a standard ant…, Cancer chemotherapy and pha… (2007) | pgx | 7 | [10.1007/s00280-006-0359-6](https://doi.org/10.1007/s00280-006-0359-6) | [17051369](https://www.ncbi.nlm.nih.gov/pubmed/17051369) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Topletz_2013.pdf` | Topletz AR et al., The relative contributions of CYP3A4 an…, Drug metabolism and disposi… (2013) | pgx | 7 | [10.1124/dmd.113.051094](https://doi.org/10.1124/dmd.113.051094) | [23780963](https://www.ncbi.nlm.nih.gov/pubmed/23780963) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T15:14:38.064504+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aapro_2010 | not_relevant | 0 | 0 | The review discusses aprepitant drug interactions with vinorelbine, not a pharmacogenomic effect of a gene variant, genotype, or phenotype on vinorelbine PK or PD. |
| PGx | Banchi_2025 | not_relevant | 0 | 0 | The paper reports no gene variant, genotype, or phenotype effect on vinorelbine PK or PD; treatment-related changes in gene expression are not pharmacogenomic effects. |
| PGx | Celik_2023 | not_relevant | 0 | 0 | The paper reports computational docking of vinorelbine with CYP enzymes, but no gene variant, genotype, or phenotype effect on a vinorelbine PK or PD parameter. |
| PGx | Charasson_2002 | not_relevant | 0 | 0 | Reports vinorelbine inhibition of irinotecan metabolism, not a gene variant, genotype, or phenotype effect on vinorelbine PK/PD. |
| PGx | Di_2020 | not_relevant | 0 | 0 | The study reports treatment-related changes in ABCB1 expression and tumor-cell responses, but no gene variant, genotype, or phenotype effect on vinorelbine PK or PD. |
| PGx | Fanelli_2016 | not_relevant | 0 | 0 | The study examines transporter-mediated drug resistance and inhibitor effects in cell lines, not how a gene variant, genotype, or phenotype changes a vinorelbine PK/PD parameter. |
| popPK | Ferrero_2002 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Ferrero_2002 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PGx | Gaurav_2024 | not_relevant | 0 | 10 | The paper examines ABCB1-related drug efflux but reports no gene variant, genotype, or phenotype effect on a vinorelbine PK or PD parameter. |
| PGx | Ge_2022 | not_relevant | 0 | 0 | Vinorelbine is listed as a subtype-guided treatment, but no gene variant, genotype, or phenotype effect on a vinorelbine PK/PD parameter is reported. |
| PGx | Gusella_2019 | not_relevant | 0 | 0 | MDR1 polymorphisms were not associated with toxicity or clinical outcomes, and no genotype effect on a vinorelbine PK or PD parameter is reported. |
| PGx | Hahn_2006 | not_relevant | 0 | 0 | The reported ABCG2 association is with survival during docetaxel-based treatment, not a vinorelbine pharmacokinetic or pharmacodynamic parameter. |
| popPK | Hamimed_2022_2 | relevant | 10 | 0 | This is a pediatric population-PK model of vinorelbine, but no numeric disposition parameter values are provided. |
| PGx | Hamimed_2022_2 | not_relevant | 0 | 0 | The provided text describes covariate-model methods but reports no gene variant, genotype, or phenotype effect on a vinorelbine PK/PD parameter. |
| PGx | Kajita_2000 | not_relevant | 0 | 0 | The study investigates CYP3A4-mediated vinorelbine metabolism in vitro but does not report a genetic variant, genotype, or phenotype effect on a PK or PD parameter. |
| PGx | Le_1993 | not_relevant | 0 | 0 | Vinorelbine inhibited a CYP2D6 assay in vitro, but the paper did not measure a genotype-related effect on vinorelbine PK or PD. |
| PGx | Leveque_2003 | not_relevant | 0 | 0 | The paper reports a rifampin drug interaction in micropigs, not an effect of a gene variant, genotype, or phenotype on vinorelbine PK or PD. |
| popPK | Levêque_1996 | irrelevant | 2 | 9 | This is a review summarizing numeric vinorelbine PK values rather than reporting original PK results. |
| PGx | Loos_2007 | not_relevant | 0 | 0 | The paper evaluates an aprepitant–vinorelbine drug interaction, not an effect of a gene variant, genotype, or phenotype on vinorelbine PK or PD. |
| PGx | Mamot_2005 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on vinorelbine pharmacokinetic or pharmacodynamic parameters is reported. |
| PGx | Michaelis_2016 | not_relevant | 0 | 0 | Reports chemical modulation of ABCB1-mediated vinorelbine transport, not an effect of a gene variant, genotype, or phenotype on a vinorelbine PK/PD parameter. |
| PGx | Osawa_2009 | not_relevant | 0 | 0 | Vinorelbine is mentioned only as a treatment option; no gene-associated effect on its pharmacokinetic or pharmacodynamic parameters is reported. |
| PGx | Puisset_2005 | not_relevant | 0 | 10 | CYP3A5 and ABCB1 genotypes were tested but were not associated with vinorelbine clearance. |
| PGx | Rugo_2022 | not_relevant | 0 | 0 | UGT1A1 genotype associations are reported for sacituzumab govitecan adverse events, not for vinorelbine pharmacokinetic or pharmacodynamic parameters. |
| PGx | Sun_2024 | not_relevant | 0 | 0 | Vinorelbine is only identified as a candidate drug by tumor pharmacosensitivity analysis; no gene variant or phenotype effect on a vinorelbine PK/PD parameter is reported. |
| PGx | Takigawa_2008 | not_relevant | 0 | 0 | The text discusses vinorelbine but reports no genotype effect on its PK or PD parameters; the stated PK association is for vincristine. |
| PGx | Tamari_2022 | not_relevant | 0 | 0 | The study examines acquired vinorelbine resistance associated with protein expression and cell viability, not a gene variant/genotype/phenotype effect on a vinorelbine PK or PD parameter. |
| PGx | Tan_2008 | not_relevant | 0 | 0 | The text only notes that vinorelbine-related variants are reviewed; it reports no specific genotype effect on a PK or PD parameter. |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The study reports predicted vinorelbine sensitivity by HCC risk group, not a gene-related effect on a vinorelbine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Tiwari_2022 | not_relevant | 0 | 0 | Vinorelbine is mentioned only as background; the study reports no vinorelbine treatment or genotype effects on its PK/PD parameters. |
| popPK | Toso_1995 | irrelevant | 1 | 0 | This is a review with qualitative PK information but no numeric parameter values. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The tables describe covariate balance for vinorelbine use and report no genetic associations or vinorelbine PK/PD parameters. |
| popPK | Washio_2019 | irrelevant | 0 | 0 | This is an in-vitro drug-efficacy study and reports no vinorelbine pharmacokinetic parameters. |
| popPK | Wong_2006 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper studies vinblastine metabolism and drug interactions, not a genetic or phenotypic effect on a vinorelbine PK/PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:15 UTC</sub>
