<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;phytomenadione&quot;}]"></div>

# phytomenadione

- **generic name:** phytomenadione
- **ATC codes:** `B02BA01`
- **DrugBank:** [DB01022](https://go.drugbank.com/drugs/DB01022) · **PubChem:** [CID 5284607](https://pubchem.ncbi.nlm.nih.gov/compound/5284607)
- **molar mass:** 450.6957 g/mol (C31H46O2) — DrugBank
- **groups:** approved, investigational

## About

Phytomenadione (vitamin K) is used to treat or prevent bleeding problems caused by vitamin K deficiency, such as haemorrhagic disease of newborns and excessive anticoagulant effects. It is an approved medicine and appears on the WHO list of essential medicines, so it is widely available worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q186093](https://www.wikidata.org/wiki/Q186093) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phytomenadione (vitamin K1) | parent | 450.696 | C31H46O2 | DrugBank | [5284607](https://pubchem.ncbi.nlm.nih.gov/compound/5284607) | Sann_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:14 | 4:59 | 0/1/1 | 0/0/0 | 0/0/4 | 227,746/15,060 | einfracz / qwen3.8-27b | 15 | 6/9 | 14/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Novotny_2010_reference](drugs/drug_phytomenadione/Phytomenadione_Novotny2010_reference.md) | — | 1-compartment (no model) | 2 | Novotny JA et al., Vitamin K absorption and kinetics in hu…, The British journal of nutr… (2010) | [10.1017/S0007114510001182](https://doi.org/10.1017/S0007114510001182) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sann_1985_reference](drugs/drug_phytomenadione/Phytomenadione_Sann1985_reference.md) | — | 1-compartment (no model) | 0 | Sann L et al., Pharmacokinetics of vitamin K1 in low-b…, Developmental pharmacology… (1985) | [10.1159/000457049](https://doi.org/10.1159/000457049) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **ABCC6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_ABCC6_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP4F2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_CYP4F2_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **VKORC1** | `Q27` · CL/F | formation | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_VKORC1_Q27.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GGCX** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sogabe_2007](drugs/drug_phytomenadione/pgx_Sogabe_2007_GGCX_Q100.md) | Sogabe N et al., Nutritional effects of gamma-glutamyl c…, Journal of nutritional scie… (2007) | [10.3177/jnsv.53.419](https://doi.org/10.3177/jnsv.53.419) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phytomenadione).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP4F2` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP4F2` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCC6 (transport), BGLAP (target), F2 (cofactor), GGCX (cofactor), GGCX (inducer), GGCX (substrate), GGCX (target), UBIAD1 (substrate), VKORC1 (formation), VKORC1 (product), VKORC1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 102 matched, 64 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mi_2020.pdf` | Mi YN et al., Determination of pharmacokinetic parame…, Clinical and experimental p… (2020) | popPK | 10 | [10.1111/1440-1681.13314](https://doi.org/10.1111/1440-1681.13314) | [32222983](https://pubmed.ncbi.nlm.nih.gov/32222983) | The study provides explicit quantitative pharmacokinetic parameters (T1/2, CL, Vd) for vitamin K1 (phytomenadione) in rats. |
| `Mi_2026.pdf` | Mi YN et al., Constant-Speed Intravenous Infusion Mod…, Current drug metabolism (2026) | popPK | 10 | [10.2174/0113892002447026260402063559](https://doi.org/10.2174/0113892002447026260402063559) | [42003058](https://pubmed.ncbi.nlm.nih.gov/42003058) | The study reports specific quantitative pharmacokinetic parameters (t1/2, CL, Vd) for phylloquinone in Sprague-Dawley rats using a constant-speed IV infusion model. |
| `Ma_2015.pdf` | Ma L et al., Pharmacokinetics and pharmacodynamics o…, Drug research (2015) | popPK | 8 | [10.1055/s-0034-1374599](https://doi.org/10.1055/s-0034-1374599) | [24764252](https://pubmed.ncbi.nlm.nih.gov/24764252) | The study is a PK study of Vitamin K1 (phytomenadione) in rats, but the evidence provided contains only qualitative descriptions (e.g., "over-proportional increase", "linear kinetics") without specific numeric values for CL, V, or ka. |
| `Sann_1985.pdf` | Sann L et al., Pharmacokinetics of vitamin K1 in low-b…, Developmental pharmacology… (1985) | popPK | 8 | [10.1159/000457049](https://doi.org/10.1159/000457049) | [4042792](https://pubmed.ncbi.nlm.nih.gov/4042792) | The study reports pharmacokinetic parameters (half-lives and qualitative volume of distribution) for vitamin K1 (phytomenadione) in neonates, with specific numeric values for half-lives provided in the abstract text. |
| `Park_1984.pdf` | Park BK et al., Plasma disposition of vitamin K1 in rel…, British journal of clinical… (1984) | popPK | 7 | [10.1111/j.1365-2125.1984.tb02526.x](https://doi.org/10.1111/j.1365-2125.1984.tb02526.x) | [6508974](https://pubmed.ncbi.nlm.nih.gov/6508974) | The study reports quantitative PK parameters (half-life, bioavailability) for phytomenadione (vitamin K1) in humans, but specific values for clearance, volume, or absorption rate are not explicitly detailed in the provided text. |
| `Choonara_1985.pdf` | Choonara IA et al., Vitamin K1 metabolism in relation to ph…, British journal of clinical… (1985) | popPK | 6 | [10.1111/j.1365-2125.1985.tb05123.x](https://doi.org/10.1111/j.1365-2125.1985.tb05123.x) | [4091996](https://pubmed.ncbi.nlm.nih.gov/4091996) | The paper describes a pharmacokinetic study of phytomenadione (Vitamin K1) in humans and reports a terminal half-life, but specific quantitative disposition parameters like clearance (CL) and volume of distribution (V) are not explicitly listed in the provided evidence text. |
| `Reddi_1995.pdf` | Reddi K et al., Interleukin 6 production by lipopolysac…, Cytokine (1995) | pd | 4 | [10.1006/cyto.1995.0034](https://doi.org/10.1006/cyto.1995.0034) | [7640347](https://www.ncbi.nlm.nih.gov/pubmed/7640347) | metadata signals extractable PD data (IC50) |
| `Alade_2024.pdf` | Alade AN et al., Cytochrome P450 Family 4F2 and 4F11 Hap…, ACS pharmacology & translat… (2024) | pgx | 5 | [10.1021/acsptsci.3c00287](https://doi.org/10.1021/acsptsci.3c00287) | [38481683](https://www.ncbi.nlm.nih.gov/pubmed/38481683) | metadata signals extractable PGX data (CYP4F2) |
| `Edson_2013.pdf` | Edson KZ et al., Cytochrome P450-dependent catabolism of…, Biochemistry (2013) | pgx | 5 | [10.1021/bi401208m](https://doi.org/10.1021/bi401208m) | [24138531](https://www.ncbi.nlm.nih.gov/pubmed/24138531) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-10-14T18:12:39.075322+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adams_2005 | not_relevant | 2 | 0 | The text is a narrative review summarizing the role of Vitamin K in bone health and arterial calcification; it mentions dose-response studies qualitatively but does not provide specific numeric PD parameters, concentration-effect curves, or model fits for phytomenadione. |
| PGx | Alade_2024 | not_relevant | 4 | 5 | The study focuses on the metabolism of phylloquinone (Vitamin K1), which is distinct from the drug phytomenadione (Vitamin K2), and reports in vitro hepatic hydroxylation kinetics rather than clinical PK/PD parameters for phytomenadione. |
| popPK | Berling_2017 | irrelevant | 1 | 0 | This is a case report focusing on warfarin poisoning where phytomenadione (vitamin K1) is only a therapeutic agent and no population PK parameters (CL, V, ka) for phytomenadione are reported or extractable. |
| popPK | Beulens_2013 | irrelevant | 2 | 0 | This is a narrative review focusing on menaquinones (Vitamin K2) and comparing them to phylloquinone (phytomenadione) without reporting original quantitative population-pharmacokinetic parameter estimates (CL, V, etc.) for phytomenadione. |
| popPK | Boermans_1991 | irrelevant | 0 | 0 | The study reports toxicokinetic parameters for brodifacoum (a rodenticide), not phytomenadione. |
| popPK | Choonara_1985 | relevant | 6 | 2 | The paper describes a pharmacokinetic study of phytomenadione (Vitamin K1) in humans and reports a terminal half-life, but specific quantitative disposition parameters like clearance (CL) and volume of distribution (V) are not explicitly listed in the provided evidence text. |
| popPK | Choonara_1986 | irrelevant | 1 | 0 | The study focuses on warfarin enantiomers and their effect on vitamin K1 metabolism (coagulation parameters), not the pharmacokinetic disposition parameters (CL, V, ka) of phytomenadione itself. |
| PGx | Crosier_2009 | not_relevant | 2 | 2 | The paper analyzes cross-sectional associations between VKORC1/GGCX genotypes and baseline vitamin K status (phylloquinone levels), not the pharmacokinetics or pharmacodynamics of the drug phytomenadione in the context of administration. |
| popPK | Davies_2010 | irrelevant | 1 | 0 | The study focuses on the interaction between oseltamivir and warfarin in humans, with no primary pharmacokinetic data or quantitative parameters for phytomenadione (Vitamin K1) as the subject drug. |
| popPK | Dong_2026 | irrelevant | 0 | 0 | The study evaluates the therapeutic efficacy of hemoperfusion for anticoagulant rodenticide poisoning and does not report pharmacokinetic disposition parameters for phytomenadione. |
| PGx | Edson_2013 | not_relevant | 2 | 2 | The paper focuses on MK4 (menaquinone-4) metabolism and CYP4F2 polymorphisms, whereas the specific query asks about phytomenadione (Vitamin K1/Phylloquinone); furthermore, it reports enzyme activity correlations rather than a pharmacokinetic or pharmacodynamic effect in a physiological context. |
| PD | Ghavami_2026 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values and in vivo tumor volume outcomes, but does not provide a concentration-effect or dose-response curve, nor does it link exposure to effect with numeric PD parameters (e.g., Emax, EC50 in vivo, slope) for phytomenadione. |
| PD | Haghighat_2025 | not_relevant | 2 | 1 | The paper is a meta-analysis of epidemiological data on dietary intake and fracture risk, not a pharmacodynamic study of phytomenadione exposure or dose-response with numeric PD parameters like Emax or EC50. |
| popPK | Haider_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on brodifacoum (superwarfarin) poisoning treated with phytomenadione, and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for phytomenadione itself. |
| PD | Hao_2017 | not_relevant | 2 | 1 | The paper is a meta-analysis of epidemiological studies examining the association between dietary intake and fracture risk, not a pharmacodynamic study measuring drug concentration or dose-response in a biological system with PD parameters like Emax or EC50. |
| popPK | Hirai_2013 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics and genetic polymorphisms affecting warfarin sensitivity, with phytomenadione serving only as a biomarker/comparator rather than the subject drug for PK modeling. |
| PGx | Holden_2010 | not_relevant | 0 | 0 | The paper analyzes Vitamin K status in CKD patients and mentions the VKORC1 genotype, but it does not report on the pharmacokinetic or pharmacodynamic effects of the specific drug phytomenadione (synthetic Vitamin K1); instead, it measures natural phylloquinone levels and markers of deficiency. |
| popPK | Hollinger_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the subject drug brodifacoum, while phytomenadione (phytonadione) is only mentioned as a therapeutic agent used to treat the poisoning. |
| popPK | Jadhav_2022 | irrelevant | 0 | 0 | The paper is a review of Vitamin K2-7 (Menaquinone-7) and does not contain quantitative pharmacokinetic parameters for phytomenadione (Vitamin K1), which is only mentioned as a comparator. |
| PD | Jadhav_2022 | not_relevant | 2 | 0 | The paper is a synthetic review discussing mechanisms and clinical trials but does not present original data or specific numeric PD parameters (Emax, EC50) for phytomenadione. |
| PD | Kim_1999 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding phytomenadione or pharmacodynamics. |
| popPK | Kohlmeier_1996 | irrelevant | 0 | 0 | The paper is a review discussing the biological transport and status of vitamin K1 (phylloquinone) and its relationship to bone health, without reporting quantitative pharmacokinetic parameters or compartmental models for phytomenadione (vitamin K3). |
| PGx | Kohlmeier_1996 | not_relevant | 6 | 5 | The paper discusses apolipoprotein E variants affecting vitamin K1 levels and anticoagulant response, but phytomenadione is specifically Vitamin K2, whereas the text exclusively focuses on Vitamin K1 (phylloquinone). |
| popPK | Ma_2015 | relevant | 8 | 2 | The study is a PK study of Vitamin K1 (phytomenadione) in rats, but the evidence provided contains only qualitative descriptions (e.g., "over-proportional increase", "linear kinetics") without specific numeric values for CL, V, or ka. |
| popPK | Mateu-Fabregat_2026 | irrelevant | 0 | 0 | The paper is a nutritional epidemiology study analyzing the association between dietary phylloquinone (vitamin K1) intake and child neurodevelopment, containing no pharmacokinetic parameters. |
| popPK | McConnico_1997 | irrelevant | 0 | 0 | The paper describes a case of brodifacoum toxicosis in horses treated with phytomenadione, but does not provide pharmacokinetic parameters for phytomenadione itself. |
| PGx | Newman_2002 | not_relevant | 3 | 3 | The paper studies the cellular uptake mechanism of vitamin K1 (phytomenadione) and the role of apoE variants (apoE2/3/4) in this process, but it is an in vitro mechanistic study, not a clinical pharmacogenomic study reporting effects on pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, bone mineral density) in a human or animal population. |
| popPK | Niemeier_2008 | irrelevant | 0 | 0 | The study focuses on lipoprotein uptake in mouse bone and does not report pharmacokinetic parameters (CL, V, t1/2) for phytomenadione. |
| popPK | Novotny_2010 | irrelevant | 2 | 0 | The study investigates phylloquinone (natural vitamin K1) from kale, not the synthetic drug phytomenadione (vitamin K3). |
| popPK | Park_1984 | relevant | 7 | 2 | The study reports quantitative PK parameters (half-life, bioavailability) for phytomenadione (vitamin K1) in humans, but specific values for clearance, volume, or absorption rate are not explicitly detailed in the provided text. |
| PGx | Reboul_2023 | not_relevant | 0 | 0 | The paper is a review of general intestinal transport proteins for fat-soluble vitamins and does not report specific pharmacogenomic effects on phytomenadione PK parameters. |
| PGx | Saupe_1993 | not_relevant | 5 | 8 | The study examines the effect of apolipoprotein E genotypes on phytomenadione (phylloquinone) transport and bone markers, which is a pharmacogenomic interaction, but it lacks a fitted pharmacokinetic model or quantitative effect size for a standard PK parameter. |
| PD | Schlagheck_1997 | not_relevant | 0 | 0 | The paper studies the dose-response of olestra on nutrient absorption, not the pharmacodynamics of phytomenadione itself. |
| PD | Shearer_1976 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship between warfarin and phylloquinone metabolism, not the pharmacodynamic effect of phytomenadione (vitamin K1) itself. |
| popPK | Shetty_1989 | irrelevant | 0 | 0 | The paper is a review of warfarin pharmacokinetics; phytomenadione is mentioned only as a treatment for warfarin overdose without specific quantitative PK parameters reported for it. |
| PD | Shetty_1989 | not_relevant | 1 | 0 | The text is a qualitative review of warfarin pharmacokinetics and mentions phytomenadione only in the context of overdose management duration, without providing any numeric PD parameters or exposure-response data. |
| PGx | Sogabe_2007 | not_relevant | 6 | 5 | The paper examines the effect of GGCX polymorphism on the pharmacodynamics of Vitamin K (osteocalcin carboxylation), not phytomenadione (Vitamin K2). |
| popPK | Solis-Trapala_2015 | irrelevant | 0 | 0 | The study is a cross-sectional analysis of bone metabolism and body composition in postmenopausal women, where phylloquinone (vitamin K1) is used as a biomarker for status/association with bone parameters, not as a subject of pharmacokinetic modeling. |
| popPK | Takahashi_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of warfarin enantiomers in pediatric patients, not phytomenadione. |
| PD | Truong_2012 | not_relevant | 0 | 0 | The paper is a clinical case report regarding the management of warfarin therapy during travel; it mentions phytonadione only as a contingency plan that was not used, and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Tsugawa_2007 | irrelevant | 1 | 0 | The paper is a narrative review of vitamin K status and bone health without original quantitative PK parameter values for phytomenadione. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing dietary intake quintiles and cancer risk, not a pharmacodynamic study of phytomenadione (vitamin K1) exposure-response or dose-response with numeric PD parameters. |
| PD | White_2017 | not_relevant | 0 | 0 | The paper models the dose-response relationship for soybean oil (a food matrix component) on the bioavailability of phylloquinone, not the pharmacodynamic or exposure-response relationship of the drug phytomenadione itself. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of warfarin, with vitamin K (phytomenadione) measured only as a covariate or biomarker rather than as the subject drug for PK parameter estimation. |
| PD | Xue_2023 | not_relevant | 4 | 2 | The paper investigates the effect of vitamin K (phytomenadione) on warfarin PK/PD parameters (like EC50) but does not report a direct concentration-effect relationship or numeric PD parameters for phytomenadione itself. |
| PD | Yu_2021 | not_relevant | 0 | 0 | The paper is an epidemiological study assessing dietary intake and cancer risk using hazard ratios, not a pharmacodynamic study measuring drug concentration or dose-response relationships for phytomenadione. |
| PD | Zhang_2024 | not_relevant | 1 | 0 | The paper is a general clinical review of Vitamin K2 that qualitatively discusses the need for dose-response research but does not report any specific numeric PD parameters or exposure-response models for phytomenadione. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or parameters regarding phytomenadione pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:12 UTC</sub>
