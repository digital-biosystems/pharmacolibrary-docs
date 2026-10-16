<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;guanfacine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guanfacine_Knebel2015_reference&quot;,&quot;label&quot;:&quot;Knebel_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# guanfacine

- **generic name:** guanfacine
- **ATC codes:** `C02AC02`
- **DrugBank:** [DB01018](https://go.drugbank.com/drugs/DB01018) · **PubChem:** [CID 3519](https://pubchem.ncbi.nlm.nih.gov/compound/3519)
- **molar mass:** 246.093 g/mol (C9H9Cl2N3O) — DrugBank
- **groups:** approved, investigational

## About

Guanfacine is used to treat high blood pressure and attention deficit hyperactivity disorder. It is an approved medicine, with products authorised in the European Union for ADHD, and it is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5613599](https://www.wikidata.org/wiki/Q5613599) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| guanfacine | parent | 246.093 | C9H9Cl2N3O | DrugBank | [3519](https://pubchem.ncbi.nlm.nih.gov/compound/3519) | Knebel_2015, Tsuda_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-10 17:13 | 1:43 | 1/5/0 | 0/0/1 | 0/0/1 | 84,343/5,397 | einfracz / qwen3.8-27b | 18 | 12/6 | 6/12 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Knebel_2015_reference](drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Knebel W et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0245-7](https://doi.org/10.1007/s40262-015-0245-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cherruault_1986_reference](drugs/drug_guanfacine/Guanfacine_Cherruault1986_reference.md) | — | 1-compartment (no model) | 0 | Cherruault Y et al., A three-compartment open model with fir…, International journal of bi… (1986) | [10.1016/0020-7101(86)90023-1](https://doi.org/10.1016/0020-7101(86)90023-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2018_reference](drugs/drug_guanfacine/Guanfacine_Li2018_reference.md) | — | 1-compartment (no model) | 0 | Li A et al., Correction to: Development of Guanfacin…, Paediatric drugs (2018) | [10.1007/s40272-017-0275-8](https://doi.org/10.1007/s40272-017-0275-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tsuda_2019_all](drugs/drug_guanfacine/Guanfacine_Tsuda2019_all.md) | — | 2-compartment (no model) | 4 | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tsuda_2019_child_6e12_years](drugs/drug_guanfacine/Guanfacine_Tsuda2019_child_6e12_years.md) | — | 2-compartment (no model) | 4 | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tsuda_2019_dose_group](drugs/drug_guanfacine/Guanfacine_Tsuda2019_dose_group.md) | — | 2-compartment (no model) | 4 | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed 0/2</span> | [Knebel_2015_2_ADHD_RS_IV](drugs/drug_guanfacine/pd_Knebel_2015_2_ADHD_RS_IV.md) | ADHD Rating Scale-IV ← guanfacine · model not identified | — | Knebel W et al., Modeling and simulation of the exposure…, Journal of pharmacokinetics… (2015) | [10.1007/s10928-014-9397-6](https://doi.org/10.1007/s10928-014-9397-6) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [McCracken_2010](drugs/drug_guanfacine/pgx_McCracken_2010_ABCB1_Q100.md) | McCracken JT et al., Possible influence of variant of the P-…, Journal of child and adoles… (2010) | [10.1089/cap.2009.0059](https://doi.org/10.1089/cap.2009.0059) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=guanfacine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | PGx paper |
| absorption | kidney | `ABCB1` transport | PGx paper |
| absorption | liver | `ABCB1` transport | PGx paper |
| absorption | placenta | `ABCB1` transport | PGx paper |
| absorption | small intestine | `ABCB1` transport | PGx paper |
| absorption | testis | `ABCB1` transport | PGx paper |
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate, `SLC22A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 37 returned
- **screened:** 17  ·  **relevant:** 1
- **records:** 6  ·  extracted 1  ·  needs_review 0  ·  rejected 5  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knebel_2014.pdf` | Knebel W et al., Population pharmacokinetic/pharmacodyna…, The AAPS journal (2014) | pd | 5 | [10.1208/s12248-014-9645-0](https://doi.org/10.1208/s12248-014-9645-0) | [25135837](https://www.ncbi.nlm.nih.gov/pubmed/25135837) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Butterworth_1993.pdf` | Butterworth JF et al., The alpha 2-adrenergic agonists clonidi…, Anesthesia and analgesia (1993) | pd | 4 | not captured | [8093828](https://www.ncbi.nlm.nih.gov/pubmed/8093828) | metadata signals extractable PD data (EC50) |
| `Pineda_1993.pdf` | Pineda J et al., Stimulatory effects of clonidine, ciraz…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00164789](https://doi.org/10.1007/BF00164789) | [7901773](https://www.ncbi.nlm.nih.gov/pubmed/7901773) | metadata signals extractable PD data (Emax) |
| `Brown_2022.pdf` | Brown JT, The Pharmacogenetic Impact on the Pharm…, Methods in molecular biolog… (2022) | pgx | 8 | [10.1007/978-1-0716-2573-6_15](https://doi.org/10.1007/978-1-0716-2573-6_15) | [36068472](https://www.ncbi.nlm.nih.gov/pubmed/36068472) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kibitov_2016.pdf` | Kibitov АО et al., [A pharmacogenetic analysis of dopamine…, Zhurnal nevrologii i psikhi… (2016) | pgx | 5 | [10.17116/jnevro201611611236-48](https://doi.org/10.17116/jnevro201611611236-48) | [28300812](https://www.ncbi.nlm.nih.gov/pubmed/28300812) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-09T06:29:51.663687+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Brown_2022 | not_relevant | 2 | 1 | The paper discusses pharmacogenetics for atomoxetine and methylphenidate, but contains no data, analysis, or specific effects reported for guanfacine. |
| popPK | Butterworth_1993 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Butterworth_1993 | not_relevant | 0 | 0 | The paper describes electrophysiological conduction block in rat sciatic nerves, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) in the context of drug efficacy or safety endpoints. |
| popPK | Cherruault_1985 | relevant | 9 | 0 | The paper describes a PK parameter estimation method tested on Guanfacine data, but the evidence text provides no specific numeric parameter values (CL, V, ka, etc.). |
| popPK | Cherruault_1986 | relevant | 8 | 0 | The paper describes a PK model for Guanfacine and states it is tested on data for the drug, but the evidence provided contains no numeric parameter values. |
| popPK | Dash_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review of TAAR-1 agonists and does not contain pharmacokinetic disposition parameters for guanfacine. |
| PD | Dash_2026 | not_relevant | 1 | 0 | The paper is a medicinal chemistry review focusing on Structure-Activity Relationships (SAR) and binding modes, not a pharmacokinetic/pharmacodynamic study reporting exposure-response or dose-response data for guanfacine. |
| PGx | De_2012 | not_relevant | 0 | 0 | The paper is a general review of ADHD treatments and only mentions the future promise of pharmacogenomics without reporting specific data on guanfacine PK/PD parameters. |
| PGx | Kibitov_2016 | not_relevant | 2 | 5 | The study reports associations between gene variants and clinical treatment outcomes (retention/relapse), not changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters like exposure or receptor response. |
| popPK | Kiechel_1986 | relevant | 10 | 2 | The abstract provides qualitative descriptions and a single half-life value (17 h), but the specific numeric values for clearance, volume, and other PK parameters are not listed in the provided text. |
| popPK | Knebel_2014 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | Knebel_2015_2 | irrelevant | 1 | 0 | The study is an exposure-response (pharmacodynamic) analysis focusing on efficacy scores and dropout patterns, not a pharmacokinetic study reporting disposition parameters like clearance or volume for guanfacine. |
| popPK | Labarrera_2018 | irrelevant | 0 | 0 | The paper is a neuroscience study focusing on the electrophysiological effects of guanfacine on neurons in mice, not a pharmacokinetic study. |
| PGx | Law_2022 | not_relevant | 0 | 0 | The paper characterizes the metabolic enzymes (CYP3A4/5) involved in guanfacine metabolism using in vitro models but does not report how genetic variants change pharmacokinetic or pharmacodynamic parameters. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The text is a copyright and licensing correction notice, not the scientific article itself, and contains no pharmacogenomic data. |
| PGx | Li_2018_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions mediated by CYP3A4 inducers/inhibitors, not the impact of a genetic variant, genotype, or phenotype on guanfacine PK/PD parameters. |
| popPK | Liu_1997 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamics study characterizing alpha-adrenoceptors in rat ileum, not a pharmacokinetic study. |
| popPK | Matsuo_2017 | relevant | 7 | 1 | The study reports guanfacine pharmacokinetics in humans, but the provided abstract contains only qualitative comparisons of AUC percentages and no specific numeric values for clearance, volume, or half-life. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and signaling analysis, not a pharmacokinetic study, and reports no disposition parameters for guanfacine. |
| PD | Newman-Tancredi_1998 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (pKi) and relative efficacies (Emax) for guanfacine at 5-HT1A receptors, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical or systemic effect. |
| popPK | Parsley_1999 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing alpha2-adrenoceptors and does not report any pharmacokinetic parameters for guanfacine. |
| PGx | Patel_2013 | not_relevant | 0 | 0 | The paper is a review discussing pharmacogenetics for methylphenidate and atomoxetine, but it does not report any gene variants affecting the PK or PD parameters of guanfacine. |
| popPK | Pineda_1993 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Pineda_1993 | not_relevant | 0 | 0 | The paper focuses on clonidine, cirazoline, and rilmenidine, and does not report any pharmacodynamic or exposure-response data for guanfacine. |
| PGx | Rizwan_2022 | not_relevant | 0 | 0 | The paper is a clinical review of treatments for Tourette's syndrome and mentions guanfacine, but it does not report any pharmacogenomic data (gene-drug interactions) affecting its PK or PD. |
| PGx | Schoretsanitis_2019 | not_relevant | 2 | 5 | The paper discusses drug-drug interactions (CYP3A4 inhibitors/inducers) for guanfacine but does not report pharmacogenomic effects (genetic variants) on its PK/PD. |
| PGx | Shim_2016 | not_relevant | 0 | 0 | The paper is a general review of ADHD treatment factors and mentions guanfacine only as a therapeutic option, without reporting any specific pharmacogenomic data or PK/PD parameters. |
| popPK | Tsuda_2019 | relevant | 10 | 0 | The paper is a population PK study of guanfacine in humans, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| PD | Tsuda_2019 | not_relevant | 5 | 3 | The paper reports a qualitative tendency for exposure-dependent reduction in ADHD RS-IV scores but does not present a formal quantitative PK/PD model fit or provide specific numeric PD parameters (e.g., Emx, EC50) or an effect-vs-concentration curve in the provided text. |
| popPK | Weiss_1979 | relevant | 10 | 2 | The study describes a two-compartment model for guanfacine with specific half-lives, but the primary quantitative parameters (clearance, volume) are not explicitly listed in the provided text. |
| PGx | Yakhchalian_2024 | not_relevant | 0 | 0 | The paper is a case report of serotonin syndrome and only mentions guanfacine as part of supportive treatment, with no pharmacogenomic analysis of guanfacine PK or PD parameters. |
| popPK | Yocca_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of dexmedetomidine, with guanfacine mentioned only as a comparator in in-vitro binding assays. |
| PD | Yocca_2025 | not_relevant | 3 | 2 | The paper focuses on dexmedetomidine; guanfacine is only used as a comparator in in vitro binding assays (Tables 1-2) without providing specific numeric PD parameters (EC50/Emax) in the text, and no in vivo PK/PD relationship is established for guanfacine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 06:32 UTC</sub>
