<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;clofarabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofarabine_Bonate2011_reference&quot;,&quot;label&quot;:&quot;Bonate_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clofarabine

- **generic name:** clofarabine
- **ATC codes:** `L01BB06`
- **DrugBank:** [DB00631](https://go.drugbank.com/drugs/DB00631) · **PubChem:** [CID 119182](https://pubchem.ncbi.nlm.nih.gov/compound/119182)
- **molar mass:** 303.677 g/mol (C10H11ClFN5O3) — DrugBank
- **groups:** approved, investigational

## About

Clofarabine is a purine analogue anticancer drug used to treat acute lymphoblastic leukemia and acute myeloid leukemia. It is approved and used in a limited, specialist setting, mainly for relapsed or refractory childhood leukemia, with one authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5134875](https://www.wikidata.org/wiki/Q5134875) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clofarabine | parent | 303.677 | C10H11ClFN5O3 | DrugBank | [119182](https://pubchem.ncbi.nlm.nih.gov/compound/119182) | Bonate_2004, Bonate_2011, Nijstad_2021 |

## Start here

> **Bonate_2011_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adult and pediatric patients with cancer. [Run it in the simulator](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md?tab=Simulation) · [record](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 18.3 | L/h | 18.3 L/h | adult and pediatric patients with cancer | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Bonate_2011_reference](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md) |
| F | Fab | 0.575 |  | 57.5 % | adult and pediatric patients with cancer | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Bonate_2011_reference](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Bonate_2011_reference](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Bonate_2004_reference](drugs/drug_clofarabine/Clofarabine_Bonate2004_reference.md) | — | 3-compartment (no model) | 6 | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Nijstad_2021_reference](drugs/drug_clofarabine/Clofarabine_Nijstad2021_reference.md) | — | 1-compartment (no model) | 2 | Nijstad AL et al., Population pharmacokinetics of clofarab…, British journal of clinical… (2021) | [10.1111/bcp.14738](https://doi.org/10.1111/bcp.14738) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wang_2019_reference](drugs/drug_clofarabine/Clofarabine_Wang2019_reference.md) | — | 1-compartment (no model) | 0 | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **DCK** | `Q322` · IC50 | metabolism | [Huang_2018](drugs/drug_clofarabine/pgx_Huang_2018_DCK_Q322.md) | Huang M et al., Clofarabine exerts antileukemic activit…, Cancer medicine (2018) | [10.1002/cam4.1323](https://doi.org/10.1002/cam4.1323) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:40 | 1:22 | 1/3/0 | 0/0/0 | 0/0/1 | 86,030/6,845 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bonate_2004.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) | [15496649](https://pubmed.ncbi.nlm.nih.gov/15496649) | The abstract explicitly reports quantitative population PK parameters (CL, V, Q) for clofarabine in pediatric patients. |
| `Bonate_2011.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | popPK | 10 | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) | [20582417](https://pubmed.ncbi.nlm.nih.gov/20582417) | The paper provides a detailed population pharmacokinetic analysis of clofarabine with specific numeric values for clearance, volume of distribution, and half-life directly in the text. |
| `Wang_2019.pdf` | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | popPK | 10 | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) | [31002993](https://pubmed.ncbi.nlm.nih.gov/31002993) | The paper reports a population pharmacokinetic model for clofarabine with specific numeric values for clearance, central/peripheral volumes, and intercompartmental clearance directly in the text. |
| `Patel_2015.pdf` | Patel YT et al., Preclinical examination of clofarabine…, Cancer chemotherapy and pha… (2015) | popPK | 8 | [10.1007/s00280-015-2713-z](https://doi.org/10.1007/s00280-015-2713-z) | [25724157](https://pubmed.ncbi.nlm.nih.gov/25724157) | The paper is a preclinical PK study in mice with a population model, but specific numeric values for clearance, volume, or half-life are not explicitly provided in the text, only derived ratios like Kpt,uu. |
| `Beach_2014.pdf` | Beach LB et al., Novel inhibitors of human immunodeficie…, The Journal of general viro… (2014) | pd | 4 | [10.1099/vir.0.069864-0](https://doi.org/10.1099/vir.0.069864-0) | [25103850](https://www.ncbi.nlm.nih.gov/pubmed/25103850) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T16:39:02.393407+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beach_2014 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| PD | Beach_2014 | not_relevant | 0 | 0 | The paper focuses on HIV-2 inhibitors and does not contain any pharmacodynamic or exposure-response data for clofarabine. |
| PGx | Ben_2021 | not_relevant | 2 | 0 | The paper is a review focusing on busulfan and treosulfan conditioning, and it explicitly states that pharmacogenetic evaluation of clofarabine is a future goal rather than reporting such data. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen and does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of clofarabine. |
| PGx | Fukuda_2012 | not_relevant | 1 | 0 | The text is a review discussing the mechanism of ABC transporter-mediated drug resistance, but it does not report a specific gene variant, genotype, or phenotype linked to a measured pharmacokinetic or pharmacodynamic parameter of clofarabine. |
| PGx | Huang_2018 | not_relevant | 4 | 5 | The study investigates the association between DCK expression (a PD marker) and drug sensitivity (PD) in cell lines, but does not report how specific gene variants (genotypes) quantitatively alter PK parameters (like AUC, clearance) or establish a definitive PGx effect on PK for clofarabine. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sorafenib (and its metabolites), with clofarabine serving only as a covariate/concurrent drug. |
| PGx | Koh_2016 | not_relevant | 1 | 2 | The study investigates pharmacokinetics but does not report any data linking gene variants to changes in these pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lamba_2007 | not_relevant | 0 | 0 | The paper reports pharmacogenomic data for deoxycytidine kinase (DCK) and its effect on cytarabine (ara-C), but does not report any PK or PD parameters specifically for clofarabine. |
| PGx | Lamba_2009 | not_relevant | 0 | 0 | The paper discusses cytarabine pharmacogenetics and only mentions clofarabine as an analog with a similar pathway, providing no specific PK/PD data for clofarabine. |
| popPK | Lindemalm_2003 | irrelevant | 1 | 0 | The study investigates in vitro cytotoxicity and cellular metabolism (EC50, nucleotide levels) rather than in vivo pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Marrero_2024 | not_relevant | 0 | 0 | The paper reports association between a pharmacogenomic score (ACS10) and clinical outcomes (EFS/OS), not the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | Mondesir_2019 | not_relevant | 1 | 5 | The paper correlates AML mutational burden with clinical outcomes (survival/response) but does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by genotype. |
| PGx | Nagai_2011 | not_relevant | 0 | 0 | The study investigates the functional interaction between deoxycytidine kinase (dCK) and ABCG2 in modulating clofarabine cytotoxicity and efflux, but it does not report a pharmacogenomic effect based on specific gene variants or genotypes on PK or PD parameters. |
| PGx | Parekh_2024 | not_relevant | 0 | 0 | The paper reports clinical response rates in Langerhans cell histiocytosis patients, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| popPK | Patel_2015 | relevant | 8 | 2 | The paper is a preclinical PK study in mice with a population model, but specific numeric values for clearance, volume, or half-life are not explicitly provided in the text, only derived ratios like Kpt,uu. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects of gene variants on the PK or PD of clofarabine. |
| PGx | Selukar_2025 | not_relevant | 0 | 0 | The paper focuses on visualizing survival outcomes (OS/EFS) using a pharmacogenomic score (ACS10) but does not report effects on pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | de_2008 | not_relevant | 4 | 2 | The paper reports in vitro cellular transport and resistance mechanisms for clofarabine mediated by ABCG2, but does not report human pharmacokinetic or pharmacodynamic parameters based on genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:39 UTC</sub>
