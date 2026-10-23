<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sepiapterin&quot;}]"></div>

# sepiapterin

- **generic name:** sepiapterin
- **ATC codes:** `A16AX28`
- **DrugBank:** [DB16326](https://go.drugbank.com/drugs/DB16326) · **PubChem:** not captured
- **molar mass:** 237.219 g/mol (C9H11N5O3) — DrugBank
- **groups:** approved, investigational

## About

Sepiapterin is used to treat phenylketonuria, a metabolic disorder. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q100606475](https://www.wikidata.org/wiki/Q100606475) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCG2** | `Q74` · AUClast | transport | [Gao_2024_2](drugs/drug_sepiapterin/pgx_Gao_2024_2_ABCG2_Q74.md) | Gao L et al., Clinical Assessment of Breast Cancer Re…, Drugs in R&D (2024) | [10.1007/s40268-024-00488-0](https://doi.org/10.1007/s40268-024-00488-0) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PAH** | `Q321` · EC50 | target | [Lah_2026](drugs/drug_sepiapterin/pgx_Lah_2026_PAH_Q321.md) | Lah M et al., Sepiapterin: A Distinct, Dual Mechanism…, Advances in therapy (2026) | [10.1007/s12325-026-03607-2](https://doi.org/10.1007/s12325-026-03607-2) |

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
| 2026-10-07 17:55 | 1:12 | 0/0/0 | 0/0/0 | 0/0/2 | 82,208/2,823 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 49 matched, 47 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2019.pdf` | Smith N et al., Phase I clinical evaluation of CNSA-001…, Molecular genetics and meta… (2019) | popPK | 8 | [10.1016/j.ymgme.2019.02.001](https://doi.org/10.1016/j.ymgme.2019.02.001) | [30922814](https://pubmed.ncbi.nlm.nih.gov/30922814) | The paper reports Phase I PK data for sepiapterin including Cmax and Tmax, but lacks explicit clearance, volume, or half-life values in the provided evidence. |
| `Meyer_2019.pdf` | Meyer JT et al., Pharmacological Assessment of Sepiapter…, The Journal of pharmacology… (2019) | pd | 5 | [10.1124/jpet.119.257105](https://doi.org/10.1124/jpet.119.257105) | [31110114](https://www.ncbi.nlm.nih.gov/pubmed/31110114) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Blasko_2002.pdf` | Blasko E et al., Mechanistic studies with potent and sel…, The Journal of biological c… (2002) | pd | 4 | [10.1074/jbc.M105691200](https://doi.org/10.1074/jbc.M105691200) | [11689556](https://www.ncbi.nlm.nih.gov/pubmed/11689556) | metadata signals extractable PD data (IC50) |
| `Gunnett_2005.pdf` | Gunnett CA et al., Mechanisms of inducible nitric oxide sy…, Arteriosclerosis, thrombosi… (2005) | pd | 4 | [10.1161/01.ATV.0000172626.00296.ba](https://doi.org/10.1161/01.ATV.0000172626.00296.ba) | [15933248](https://www.ncbi.nlm.nih.gov/pubmed/15933248) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T17:54:46.976595+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Andrade_2019 | not_relevant | 0 | 0 | The paper investigates the genetic basis of natural color polymorphism in lizards involving sepiapterin reductase, not the pharmacokinetics or pharmacodynamics of sepiapterin as a drug. |
| popPK | Blasko_2002 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Blasko_2002 | not_relevant | 0 | 0 | Paper describes iNOS dimerization inhibitor mechanistic studies; no sepiapterin exposure- or dose-response PD relationship or numeric PD parameters reported. |
| PGx | Eslamiyeh_2025 | not_relevant | 0 | 0 | The paper describes the diagnosis of a genetic disorder (sepiapterin reductase deficiency) and characterizes the protein structure changes caused by a mutation, but it does not report pharmacokinetic or pharmacodynamic parameters of sepiapterin as a drug in a pharmacogenomic context. |
| PGx | Gao_2024 | not_relevant | 3 | 8 | The paper attributes the 10-30% higher BH4 exposure in Japanese participants to a likely higher frequency of the ABCG2 c.421C&gt;A mutation, but it does not report a direct pharmacogenomic analysis or fitted effect size for that specific genotype. |
| popPK | Gao_2024_2 | relevant | 8 | 4 | The study reports specific pharmacokinetic parameters (Cmax, AUClast, Tmax) for sepiapterin in Table 2, although it lacks disposition parameters like clearance, volume, or half-life for sepiapterin itself because it is rapidly converted to BH4. |
| popPK | Gao_2024_3 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | Gao_2026 | irrelevant | 2 | 0 | The paper is a genetic bridging prediction report without original clinical PK trials or quantitative disposition parameters (CL, V) for sepiapterin; it only cites relative exposure fold-changes based on genetic correlations. |
| PGx | Gao_2026_2 | not_relevant | 0 | 0 | The paper is a thorough QT study in healthy subjects assessing cardiovascular safety and does not report any association between genetic variants (e.g., PAH genotype) and pharmacokinetic or pharmacodynamic parameters. |
| popPK | Gibraeil_2000 | irrelevant | 0 | 0 | In-vitro pharmacology study of 4-ABH(4); sepiapterin is only a co-incubation comparator with no PK parameters. |
| popPK | Gunnett_2005 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | Gunnett_2005 | not_relevant | 0 | 0 | Only a title is provided; no sepiapterin PD or exposure-response data or parameters are reported. |
| PGx | Himmelreich_2021 | not_relevant | 0 | 0 | The paper reviews genetic variants in BH4 biosynthesis genes and their clinical phenotypes, but does not report pharmacokinetic or pharmacodynamic parameters of the drug sepiapterin. |
| popPK | Ikemoto_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DAHP and sepiapterin on cell signaling and protein expression, not a pharmacokinetic study of sepiapterin. |
| PD | Ikemoto_2008 | not_relevant | 2 | 1 | In-vitro dose-response of DAHP (not sepiapterin) on VCAM-1/BH4 is described qualitatively with no numeric PD parameters or extractable effect-concentration curves; sepiapterin is only a rescue supplement. |
| PGx | Jacobson_1981 | not_relevant | 0 | 0 | The paper discusses pteridine metabolism and sepiapterin as an inhibitor in an enzyme assay, not the pharmacokinetics or pharmacodynamics of sepiapterin as a therapeutic agent. |
| PGx | Jones_2026 | not_relevant | 0 | 0 | This is a narrative review on nutritional and general therapeutic strategies for PKU; it does not report specific pharmacogenomic effects on sepiapterin's PK/PD parameters. |
| PGx | Jung-Klawitter_2019 | not_relevant | 0 | 0 | The paper is a review of analytical methods for diagnosing inborn errors of metabolism and does not report pharmacogenomic studies of sepiapterin treatment. |
| PGx | Klaassen_2025 | not_relevant | 0 | 0 | The paper reports baseline phenotypic characteristics (phenylalanine levels and tolerance) and predicts the probability of response to sepiapterin, but does not report observed changes in pharmacokinetic or pharmacodynamic parameters of sepiapterin resulting from the tested gene variants. |
| popPK | La_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic study in rats using sepiapterin to treat erectile dysfunction, and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | La_2013 | not_relevant | 3 | 2 | Sepiapterin effect is only a qualitative presence/absence comparison (ICP/MAP augmentation, P&lt;0.05) with no dose-response, concentration-effect data, or numeric PD parameters (no Emax/EC50 for sepiapterin) reported. |
| PGx | Lah_2026 | not_relevant | 2 | 0 | The text is a title and abstract fragment without data; while it mentions PAH variants, it does not report a quantitative pharmacogenomic effect on a PK/PD parameter. |
| PGx | Latremoliere_2018 | not_relevant | 0 | 0 | The paper discusses sepiapterin as a biomarker for drug action (target engagement) in the context of pain management, but does not report a pharmacogenomic effect (gene variant changing a PK/PD parameter) of sepiapterin itself as a drug. |
| PGx | McHugh_2008 | not_relevant | 0 | 0 | The paper discusses sepiapterin reductase (SPR) expression changes, not sepiapterin pharmacokinetics, and does not report any pharmacogenomic effect. |
| popPK | Meyer_2019 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PGx | Nezhad_2024 | not_relevant | 0 | 0 | The paper is a genetic association study identifying BH4 pathway variants in HPA patients, not a pharmacogenomic study on sepiapterin PK/PD. |
| popPK | Ohashi_2011 | irrelevant | 1 | 0 | The study focuses on in-vitro membrane transport mechanisms (ENT1/ENT2) and qualitative tissue deposition, lacking quantitative population pharmacokinetic parameters for sepiapterin. |
| PGx | Pearl_2007 | not_relevant | 0 | 0 | This text provides a general overview of various pediatric neurotransmitter disorders and their associated enzyme deficiencies, but it does not contain any pharmacogenomic or pharmacokinetic data related to the drug sepiapterin. |
| popPK | Qi_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sapropterin (tetrahydrobiopterin), not sepiapterin. |
| PD | Qi_2015 | not_relevant | 0 | 0 | This is a population PK-only analysis (CL/F, V/F, absorption) of sapropterin; no concentration-effect or dose-response PD relationship (e.g., Phe reduction vs exposure) is modeled or quantified. |
| popPK | Shaban_2024 | irrelevant | 0 | 0 | Sepiapterin appears only as "sepiapterin reductase" in an in-silico enzyme target; no PK parameters for sepiapterin are reported. |
| PD | Shaban_2024 | not_relevant | 0 | 0 | Sepiapterin appears only as "sepiapterin reductase" in in silico docking; no sepiapterin exposure- or dose-response PD data or parameters are reported. |
| popPK | Sigel_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piritrexim, not sepiapterin; sepiapterin is only mentioned as a biochemical substrate used to assess DHFR inhibition. |
| popPK | Smith_2019 | relevant | 8 | 3 | The paper reports Phase I PK data for sepiapterin including Cmax and Tmax, but lacks explicit clearance, volume, or half-life values in the provided evidence. |
| popPK | Tiefenbacher_2000 | irrelevant | 0 | 0 | The study is a mechanistic vascular physiology investigation using sepiapterin as a substrate to test its effect on endothelial function, not a pharmacokinetic study reporting disposition parameters. |
| PD | Tiefenbacher_2000 | not_relevant | 2 | 1 | Sepiapterin was used as a fixed incubation condition in ex vivo vessel studies; dose-response curves are to agonists (histamine, serotonin, etc.), not to sepiapterin, and no sepiapterin concentration-effect parameters (Emax, EC50) are reported or derivable. |
| popPK | Tiefenbacher_2003 | irrelevant | 0 | 0 | The study is a mechanistic efficacy study assessing sepiapterin's effect on postischemic heart injury, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Verbeek_2008 | not_relevant | 0 | 0 | The paper describes the pathophysiology and diagnosis of sepiapterin reductase deficiency, not the pharmacokinetics or pharmacodynamics of sepiapterin as a administered drug. |
| popPK | Williams_2025 | irrelevant | 2 | 0 | The paper is a narrative review that discusses pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or model values. |
| PD | Williams_2025 | not_relevant | 2 | 1 | Narrative review discussing sepiapterin's PD qualitatively; no numeric PD parameters or effect-concentration data extractable from the abstract. |
| PGx | de_2018 | not_relevant | 0 | 0 | The paper reports changes in the expression of the sepiapterin reductase enzyme in parkin knockout mice, but it does not report a pharmacokinetic or pharmacodynamic effect of a drug or gene variant on sepiapterin levels or response. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
