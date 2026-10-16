<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;alprenolol&quot;}]"></div>

# alprenolol

- **generic name:** alprenolol
- **ATC codes:** `C07AA01`
- **DrugBank:** [DB00866](https://go.drugbank.com/drugs/DB00866) · **PubChem:** [CID 2119](https://pubchem.ncbi.nlm.nih.gov/compound/2119)
- **molar mass:** 249.3486 g/mol (C15H23NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Alprenolol is a non-selective beta blocker that was used to treat high blood pressure, unstable angina, and heart attack, and also acted against rhythm disturbances. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q201370](https://www.wikidata.org/wiki/Q201370) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:53 | 1:16 | 0/0/0 | 2/1/0 | 0/0/0 | 83,930/4,559 | einfracz / qwen3.8-27b | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Adie_2003_beta_2_adrenoceptor_activation](drugs/drug_alprenolol/pd_Adie_2003_beta_2_adrenoceptor_activation.md) | beta(2)-adrenoceptor activation ← alprenolol · inhibition effect | — | Adie EJ et al., CypHer 5: a generic approach for measur…, Assay and drug development… (2003) | [10.1089/15406580360545062](https://doi.org/10.1089/15406580360545062) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cleveland_2019_JB6_P_colony_formation](drugs/drug_alprenolol/pd_Cleveland_2019_JB6_P_colony_formation.md) | EGF-induced JB6 P+ cell transformation ← alprenolol · direct sigmoid Emax (Hill) effect | — | Cleveland KH et al., Carvedilol inhibits EGF-mediated JB6 P+…, PloS one (2019) | [10.1371/journal.pone.0217038](https://doi.org/10.1371/journal.pone.0217038) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cunliffe_2007_AC_activity](drugs/drug_alprenolol/pd_Cunliffe_2007_AC_activity.md) | basal adenylyl cyclase activity ← alprenolol · stimulation effect | — | Cunliffe JM et al., Detection of g protein coupled receptor…, Analytical chemistry (2007) | [10.1021/ac071203+](https://doi.org/10.1021/ac071203+) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alprenolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target), HTR1A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 140 matched, 136 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_23 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alván_1977.pdf` | Alván G et al., Effect of pentobarbital on the disposit…, Clinical pharmacology and t… (1977) | popPK | 10 | [10.1002/cpt1977223316](https://doi.org/10.1002/cpt1977223316) | [891097](https://pubmed.ncbi.nlm.nih.gov/891097) | The study reports quantitative PK parameters for alprenolol in humans, specifically liver extraction ratios (0.72 to 0.93) and AUC values, although specific clearance (CL) and volume (V) numbers are not explicitly listed in the provided text. |
| `Sager_1986.pdf` | Sager G et al., Effect of serum, alpha-1 acid glycoprot…, Acta pharmacologica et toxi… (1986) | pd | 5 | [10.1111/j.1600-0773.1986.tb00094.x](https://doi.org/10.1111/j.1600-0773.1986.tb00094.x) | [3012942](https://www.ncbi.nlm.nih.gov/pubmed/3012942) | metadata signals extractable PD data (EC50) |
| `Unsworth_1992.pdf` | Unsworth CD et al., Regulation of the 5-hydroxytryptamine1B…, Molecular pharmacology (1992) | pd | 5 | not captured | [1328846](https://www.ncbi.nlm.nih.gov/pubmed/1328846) | metadata signals extractable PD data (EC50) |
| `Bianchetti_1990.pdf` | Bianchetti A et al., In vitro inhibition of intestinal motil…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14100.x](https://doi.org/10.1111/j.1476-5381.1990.tb14100.x) | [1976401](https://www.ncbi.nlm.nih.gov/pubmed/1976401) | metadata signals extractable PD data (EC50) |
| `Bodewei_1988.pdf` | Bodewei R et al., [Calcium current effects in the presenc…, Biomedica biochimica acta (1988) | pd | 4 | not captured | [2845962](https://www.ncbi.nlm.nih.gov/pubmed/2845962) | metadata signals extractable PD data (IC50) |
| `Croci_1988.pdf` | Croci T et al., Inhibition of rat colon motility by sti…, Pharmacological research co… (1988) | pd | 4 | [10.1016/s0031-6989(88)80007-9](https://doi.org/10.1016/s0031-6989(88)80007-9) | [2898155](https://www.ncbi.nlm.nih.gov/pubmed/2898155) | metadata signals extractable PD data (EC50) |
| `De_1995.pdf` | De Ponti F et al., Functional evidence for the presence of…, Pharmacology (1995) | pd | 4 | [10.1159/000139338](https://doi.org/10.1159/000139338) | [8584580](https://www.ncbi.nlm.nih.gov/pubmed/8584580) | metadata signals extractable PD data (EC50) |
| `Drira-Chaabane_1996.pdf` | Drira-Chaabane S et al., Lipolytic action of Buthus occitanus tu…, Biochemical and biophysical… (1996) | pd | 4 | [10.1006/bbrc.1996.1346](https://doi.org/10.1006/bbrc.1996.1346) | [8806627](https://www.ncbi.nlm.nih.gov/pubmed/8806627) | metadata signals extractable PD data (EC50) |
| `Fowler_1991.pdf` | Fowler CJ et al., Antagonism by 8-hydroxy-2(di-n-propylam…, Life sciences (1991) | pd | 4 | [10.1016/0024-3205(91)90361-e](https://doi.org/10.1016/0024-3205(91)90361-e) | [1825686](https://www.ncbi.nlm.nih.gov/pubmed/1825686) | metadata signals extractable PD data (EC50) |
| `Golf_1986.pdf` | Golf S et al., Relative potencies of various beta-adre…, Scandinavian journal of cli… (1986) | pd | 4 | [10.3109/00365518609083647](https://doi.org/10.3109/00365518609083647) | [2872714](https://www.ncbi.nlm.nih.gov/pubmed/2872714) | metadata signals extractable PD data (IC50) |
| `Green_1983.pdf` | Green AR et al., Interactions of beta-adrenoceptor agoni…, Neuropharmacology (1983) | pd | 4 | [10.1016/0028-3908(83)90159-4](https://doi.org/10.1016/0028-3908(83)90159-4) | [6136009](https://www.ncbi.nlm.nih.gov/pubmed/6136009) | metadata signals extractable PD data (IC50) |
| `Klug_1994.pdf` | Klug S et al., Toxicity of beta-blockers in a rat whol…, Archives of toxicology (1994) | pd | 4 | [10.1007/s002040050085](https://doi.org/10.1007/s002040050085) | [7916561](https://www.ncbi.nlm.nih.gov/pubmed/7916561) | metadata signals extractable PD data (EC50) |
| `Landi_1992.pdf` | Landi M et al., Phenylethanolaminotetralines compete wi…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90401-4](https://doi.org/10.1016/0006-2952(92)90401-4) | [1354964](https://www.ncbi.nlm.nih.gov/pubmed/1354964) | metadata signals extractable PD data (IC50) |
| `Lima_1996.pdf` | Lima JJ, Relationship between beta adrenoceptor…, Journal of receptor and sig… (1996) | pd | 4 | [10.3109/10799899609039956](https://doi.org/10.3109/10799899609039956) | [8968966](https://www.ncbi.nlm.nih.gov/pubmed/8968966) | metadata signals extractable PD data (EC50) |
| `Mazzocchi_1998.pdf` | Mazzocchi G et al., The AT2 receptor-mediated stimulation o…, Endocrine research (1998) | pd | 4 | [10.3109/07435809809031866](https://doi.org/10.3109/07435809809031866) | [9553752](https://www.ncbi.nlm.nih.gov/pubmed/9553752) | metadata signals extractable PD data (EC50) |
| `Sager_1989.pdf` | Sager G et al., The effect of the plasticizers TBEP (tr…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90101-9](https://doi.org/10.1016/0006-2952(89)90101-9) | [2547384](https://www.ncbi.nlm.nih.gov/pubmed/2547384) | metadata signals extractable PD data (IC50) |
| `Sawutz_1985.pdf` | Sawutz DG et al., Characterization of monoclonal antibodi…, Journal of immunology (Balt… (1985) | pd | 4 | not captured | [2993414](https://www.ncbi.nlm.nih.gov/pubmed/2993414) | metadata signals extractable PD data (IC50) |
| `Schumacher_1984.pdf` | Schumacher W et al., Biological maturation and beta-adrenerg…, Molecular and cellular bioc… (1984) | pd | 4 | [10.1007/BF00240617](https://doi.org/10.1007/BF00240617) | [6323958](https://www.ncbi.nlm.nih.gov/pubmed/6323958) | metadata signals extractable PD data (EC50) |
| `Street_1984.pdf` | Street JA et al., Inhibition of synaptosomal [3H]noradren…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90263-2](https://doi.org/10.1016/0014-2999(84)90263-2) | [6148250](https://www.ncbi.nlm.nih.gov/pubmed/6148250) | metadata signals extractable PD data (IC50) |
| `Subbarao_1990.pdf` | Subbarao KV et al., Effect of adrenergic agonists on glycog…, Brain research (1990) | pd | 4 | [10.1016/0006-8993(90)90028-a](https://doi.org/10.1016/0006-8993(90)90028-a) | [2085749](https://www.ncbi.nlm.nih.gov/pubmed/2085749) | metadata signals extractable PD data (EC50) |
| `Svoboda_1986.pdf` | Svoboda P et al., Effect of catecholamines and metal chel…, Comparative biochemistry an… (1986) | pd | 4 | [10.1016/0742-8413(86)90095-2](https://doi.org/10.1016/0742-8413(86)90095-2) | [2874945](https://www.ncbi.nlm.nih.gov/pubmed/2874945) | metadata signals extractable PD data (EC50) |
| `Yamamoto_2003.pdf` | Yamamoto T et al., High-throughput screening to estimate s…, Xenobiotica; the fate of fo… (2003) | pd | 4 | [10.1080/0049825031000140887](https://doi.org/10.1080/0049825031000140887) | [12936703](https://www.ncbi.nlm.nih.gov/pubmed/12936703) | metadata signals extractable PD data (IC50) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-14T19:53:20.413105+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ablad_1974 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | Adie_2003 | irrelevant | 0 | 0 | This is an in vitro cell biology/assay validation study using alprenolol as an antagonist probe, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Aellig_1982 | irrelevant | 1 | 0 | This is a clinical pharmacology review of pindolol; alprenolol is only mentioned as a comparator with no PK parameters reported. |
| popPK | Audus_1982 | irrelevant | 0 | 0 | The study is a mechanistic investigation of propranolol on murine lymphocytes using fluorescent probes, and alprenolol is only mentioned as a comparative agent without any pharmacokinetic parameters. |
| PD | Audus_1982 | not_relevant | 2 | 1 | The paper focuses on propranolol's mechanism of action on lymphocytes using fluorescent probes; alprenolol is only mentioned as a comparator for qualitative comparison, and no numeric PD parameters or exposure-response curves for alprenolol are provided. |
| popPK | Barrett_1970 | irrelevant | 0 | 0 | The study focuses on comparative chronotropic activity and beta-adrenoceptor blocking potency (pharmacodynamics) in rats and cats, not pharmacokinetic disposition parameters. |
| popPK | Bianchetti_1990 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | Bianchetti_1990 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of intestinal motility by phenylethanolaminotetralines in rat colon and does not report any pharmacodynamic or exposure-response data for alprenolol. |
| popPK | Bodewei_1988 | irrelevant | 0 | 0 | In-vitro electrophysiology study of propranolol on calcium currents; alprenolol is only a reference compound with no PK parameters. |
| popPK | Box_1989 | irrelevant | 0 | 0 | In-vitro receptor binding study in S49 cells; no pharmacokinetic disposition parameters for alprenolol. |
| popPK | Branch_1984 | irrelevant | 1 | 0 | The paper is a review discussing qualitative changes in clearance (50%-500% increase) without reporting specific quantitative PK parameters (like CL, V, ka) for alprenolol. |
| popPK | Capponi_1977 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of renin release in rat kidney slices, not a pharmacokinetic study reporting disposition parameters for alprenolol. |
| popPK | Cleveland_2019 | irrelevant | 0 | 0 | This is an in-vitro pharmacology/cancer chemoprevention study of β-blockers in JB6 cells; alprenolol appears only as a comparator ligand with IC50/Kd values, no PK disposition parameters. |
| popPK | Collste_1976 | irrelevant | 4 | 1 | The study reports steady-state plasma concentrations and PK/PD correlations but lacks quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Collste_1976_2 | irrelevant | 4 | 0 | The study examines the relationship between steady-state plasma concentrations and blood pressure but does not report specific pharmacokinetic disposition parameters (CL, V, ka) in the provided evidence. |
| popPK | Croci_1988 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Croci_1988 | not_relevant | 0 | 0 | The paper focuses on the inhibition of rat colon motility by atypical beta-adrenoceptor agonists and does not report pharmacodynamic or exposure-response data for alprenolol. |
| popPK | Cunliffe_2007 | irrelevant | 0 | 0 | The paper describes a pharmacological assay for adenylyl cyclase activity where alprenolol is used as a partial agonist, but no pharmacokinetic parameters are reported. |
| popPK | De_1995 | irrelevant | 0 | 0 | The study focuses on colonic motility and uses alprenolol only as a non-selective beta-adrenoceptor antagonist (comparative pharmacology), with no pharmacokinetic parameters reported. |
| popPK | De_1995_2 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | De_1995_2 | not_relevant | 0 | 0 | The paper investigates beta-3 adrenoceptor function in guinea pig tissues and does not report any pharmacokinetic or pharmacodynamic data for alprenolol. |
| popPK | Drira-Chaabane_1996 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PGx | Eichelbaum_1984 | not_relevant | 2 | 0 | The paper lists alprenolol as a substrate affected by PM phenotype but provides no quantitative PK/PD data or specific effect sizes for it. |
| popPK | Fowler_1991 | irrelevant | 0 | 0 | no_text gate: only 204 chars of text extracted (&lt; 400) |
| PD | Fowler_1991 | not_relevant | 0 | 0 | The paper investigates serotonin agonists and muscarinic receptors in neuroblastoma cells and does not mention alprenolol or report any pharmacodynamic parameters for it. |
| popPK | Fowler_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological receptor assay where alprenolol is used solely as a beta-adrenergic antagonist to block serotonergic responses, not as the subject of a pharmacokinetic study. |
| PD | Fowler_1992 | not_relevant | 3 | 2 | The paper reports a pA2 value (7.0) for (-)-alprenolol as a competitive antagonist in an in vitro cAMP assay, which is a pharmacological potency parameter but not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Fyles_1986 | irrelevant | 0 | 0 | The paper investigates beta-adrenergic receptor binding in pancreatic islets using alprenolol as a ligand/antagonist, not pharmacokinetics. |
| PD | Fyles_1986 | not_relevant | 3 | 2 | The paper reports receptor binding densities and qualitative functional effects (e.g., abolition of response by 1 µM alprenolol) but does not provide a quantitative concentration-effect curve or numeric PD parameters (like IC50 or Emax) for alprenolol itself. |
| popPK | Garcia_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance study of nightmare reporting odds ratios, with no PK disposition parameters for alprenolol. |
| popPK | Ghahary_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study using alprenolol only as a ligand; no PK disposition parameters. |
| popPK | Golf_1986 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study (adenylate cyclase/binding IC50s), no PK disposition parameters for alprenolol. |
| popPK | Green_1983 | irrelevant | 0 | 0 | This is an in-vitro receptor binding study reporting IC50 values, not pharmacokinetic disposition parameters for alprenolol. |
| popPK | Gugler_1976 | irrelevant | 1 | 0 | The text is a review summarizing general properties and provides a qualitative half-life range (2-4 h) without specific quantitative population-PK parameter values (e.g., CL, V) for alprenolol. |
| popPK | Hanasaki_1987 | irrelevant | 0 | 0 | The study is a mechanistic investigation of prostaglandin D2 binding in rabbit platelets where alprenolol is used solely as a comparator antagonist, with no pharmacokinetic parameters reported. |
| popPK | Jaspersen_2000 | irrelevant | 0 | 0 | This is a clinical review on drug-induced oesophageal disorders; alprenolol is listed only as an offending agent for oesophagitis, with no pharmacokinetic data. |
| popPK | Jeong_2012 | irrelevant | 0 | 0 | In-vitro electrophysiology study of carvedilol on Kv1.5 channels; alprenolol is only a comparator with no PK parameters. |
| PD | Jeong_2012 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, rate constants) for carvedilol, but explicitly states that alprenolol had little or no effect on Kv1.5 currents, providing no numeric PD relationship for alprenolol. |
| popPK | Jiang_1978 | irrelevant | 1 | 0 | The study focuses on the synthesis and tissue distribution of new radioiodinated derivatives, not the quantitative pharmacokinetic parameters (CL, V, ka) of alprenolol itself. |
| popPK | Johnson_1993 | irrelevant | 0 | 0 | The study investigates serotonin 5-HT1A receptors and tyrosine hydroxylation, using alprenolol only as a receptor antagonist probe, and does not report pharmacokinetic parameters for alprenolol. |
| PD | Johnson_1993 | not_relevant | 0 | 0 | The paper investigates serotonin 5-HT1A receptor modulation of tyrosine hydroxylation; alprenolol is used only as a 5-HT1A antagonist to confirm receptor specificity, not as the drug of interest for a PD/exposure-response analysis. |
| popPK | Johnsson_1976 | irrelevant | 1 | 0 | This is a review article providing general qualitative descriptions of beta-blocker PK without reporting specific quantitative parameter values (like clearance or volume) for alprenolol. |
| popPK | Johnsson_1976_2 | irrelevant | 1 | 0 | This is a narrative review of beta-blockers that lacks original quantitative pharmacokinetic parameter values for alprenolol. |
| popPK | Kaukel_1984 | irrelevant | 0 | 0 | The study is an in vitro/mechanistic investigation of guinea-pig tracheae using alprenolol (3H-labeled) only as a radioligand for receptor binding, not as a drug for pharmacokinetic evaluation. |
| popPK | Kessler_1991 | irrelevant | 0 | 0 | Alprenolol appears only as a test ligand in an in vitro receptor-binding study; no PK parameters for it are reported. |
| PD | Kessler_1991 | not_relevant | 0 | 0 | The paper characterizes a radioligand ([125I]epidepride) and reports in vitro binding affinities (IC50) for various compounds including alprenolol, but does not report a pharmacodynamic exposure-response or dose-response relationship for alprenolol itself. |
| popPK | Klug_1994 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Kousvelari_1983 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study of a derivative (BrAlpM) in rat parotid cells; no PK disposition parameters for alprenolol. |
| popPK | Krämer_2016 | irrelevant | 0 | 0 | The paper focuses on membrane permeability mechanisms of other drugs (tetracycline, rifampicin, labetalol, metoprolol) and does not report pharmacokinetic parameters for alprenolol. |
| popPK | Kubrusly_2007 | irrelevant | 0 | 0 | This is a mechanistic study of receptor pharmacology in chicken retina where alprenolol is used only as a beta-adrenergic antagonist control, not as the subject of a pharmacokinetic study. |
| PD | Kubrusly_2007 | not_relevant | 0 | 0 | The paper uses alprenolol only as a qualitative antagonist to block beta-adrenergic effects; it does not report a concentration-effect or dose-response relationship for alprenolol itself. |
| popPK | Kusiak_1983 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (adenylate cyclase inhibition and receptor binding) of novel alprenolol derivatives, not on the quantitative pharmacokinetic parameters of alprenolol itself. |
| popPK | Kusiak_1987 | irrelevant | 0 | 0 | This is a receptor-binding study of a cyanopindolol analogue; alprenolol appears only as a radioligand/protecting agent, with no PK parameters. |
| PD | Kusiak_1987 | not_relevant | 3 | 2 | The paper reports receptor binding displacement (IC50) and qualitative in vivo dose effects on receptor density, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50 for functional effect) for alprenolol itself. |
| popPK | Landi_1992 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Landi_1992 | not_relevant | 0 | 0 | The paper reports in vitro radioligand binding competition assays, not pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| popPK | Lima_1996 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Lima_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships for alprenolol. |
| popPK | MacEwan_1995 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology analysis of beta-adrenoceptor ligands and does not report pharmacokinetic parameters for alprenolol. |
| PD | MacEwan_1995 | not_relevant | 4 | 3 | The paper analyzes concentration-response curves for beta-agonists in cell lines, but alprenolol is only mentioned as a component of the irreversible antagonist BAAM used to reduce receptor density, not as the subject of a PD or exposure-response analysis. |
| popPK | Maderspach_1982 | irrelevant | 0 | 0 | The study investigates in-vitro beta-adrenergic receptor binding kinetics (Bmax, Kd) of alprenolol in brain cells, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| PD | Maderspach_1982 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding kinetics and affinity parameters (Kd, Bmax, Hill coefficient) for alprenolol, which are pharmacological binding data, not pharmacodynamic (exposure-response or dose-response) effect data. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Maideen_2021 | not_relevant | 1 | 0 | The paper is a qualitative review of drug interactions and does not report specific numeric PD parameters or concentration-effect curves for alprenolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions, not pharmacogenomic effects. |
| popPK | Man_1982 | irrelevant | 0 | 0 | This is a review of haemodynamic effects (blood pressure, cardiac output) of beta-blockers, not a study reporting pharmacokinetic disposition parameters (CL, V, t1/2) for alprenolol. |
| popPK | Man_1983 | irrelevant | 0 | 0 | The paper is a review analyzing haemodynamic effects and pharmacodynamics of beta-blockers, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for alprenolol. |
| popPK | Mauger_1980 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and functional assay using alprenolol as a pharmacological probe, not a pharmacokinetic study. |
| popPK | Mazzocchi_1998 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Mazzocchi_1998 | not_relevant | 0 | 0 | The paper focuses on the interaction between angiotensin receptors and catecholamine/aldosterone release in rats, with no mention of alprenolol or its pharmacodynamic parameters. |
| popPK | Millan_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of 5-HT1A partial agonists on opioid antinociception, using alprenolol only as a putative antagonist comparator rather than studying its pharmacokinetics. |
| popPK | Millan_1992 | irrelevant | 0 | 0 | The paper studies the pharmacological properties of S 14671 at serotonin receptors, using alprenolol only as a 5-HT1A antagonist control rather than as the subject drug for pharmacokinetic analysis. |
| PD | Millan_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of S 14671; alprenolol is only mentioned as a non-specific antagonist used to block effects, with no PD or exposure-response analysis for alprenolol. |
| popPK | Millan_1994 | irrelevant | 0 | 0 | The study is a comparative pharmacological characterization of benzodioxopiperazines at 5-HT1A receptors, using (-)-alprenolol only as a reference compound for receptor binding affinity, with no pharmacokinetic parameters reported. |
| popPK | Nakamura_1991 | irrelevant | 0 | 0 | This is an in vitro receptor binding study using [3H]dihydroalprenolol as a ligand, not a pharmacokinetic study of alprenolol disposition. |
| PD | Nakamura_1991 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities and Hill coefficients, not pharmacodynamic exposure-response or dose-response relationships for alprenolol. |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The paper focuses on the pharmacological mechanism of SR 58611A, using alprenolol only as a non-specific antagonist probe, and provides no pharmacokinetic data. |
| PD | Nisoli_1994 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for the agonist SR 58611A, but alprenolol is only mentioned qualitatively as a non-selective antagonist used at high doses to confirm receptor subtype, with no numeric PD parameters or dose-response curve provided for alprenolol itself. |
| popPK | Nonogaki_1995 | irrelevant | 0 | 0 | The study investigates lipid metabolism in rats where alprenolol is used only as a co-administered receptor antagonist, not as the subject drug for pharmacokinetic analysis. |
| popPK | Ogg_1987 | irrelevant | 0 | 0 | The paper is a mechanistic pharmacology study on propranolol metabolites, where alprenolol is used only as a radioligand to assess beta-receptor binding, not as a subject for PK parameter estimation. |
| popPK | Rane_1977 | irrelevant | 1 | 1 | The study is an in vitro/in situ mechanistic analysis using isolated perfused rat livers to predict hepatic extraction ratios, not a systemic PK study reporting disposition parameters like CL, V, or t1/2 for alprenolol in vivo. |
| popPK | Regardh_1974 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PD | Regardh_1974 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Regårdh_1975 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| popPK | Sager_1986 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Sager_1986 | not_relevant | 0 | 0 | The paper investigates the effect of serum proteins on beta-adrenoceptor binding in mononuclear leucocytes and does not report any pharmacokinetic or pharmacodynamic exposure-response relationship for alprenolol. |
| popPK | Sager_1989 | irrelevant | 0 | 0 | In-vitro radioligand binding study; alprenolol is only a displacing ligand, no PK disposition parameters. |
| popPK | Sakuta_1992 | irrelevant | 0 | 0 | In-vitro electrophysiology study in Xenopus oocytes; alprenolol is only a test compound with IC50 values, no PK disposition parameters. |
| popPK | Sawutz_1985 | irrelevant | 0 | 0 | In vitro monoclonal antibody binding study; no PK disposition parameters for alprenolol. |
| popPK | Schumacher_1984 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Schumacher_1984 | not_relevant | 0 | 0 | The paper focuses on the developmental biology of beta-adrenergic receptors in rabbit hearts and does not report pharmacokinetic or pharmacodynamic modeling for alprenolol. |
| popPK | Sealey_1971 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Shimizu_2009 | irrelevant | 2 | 0 | The paper is a review of beta-blockers for migraine prophylaxis and mentions alprenolol only as a drug with intrinsic sympathomimetic activity that is not effective for migraine, without providing original quantitative PK parameters. |
| popPK | Shiraki_1998 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on neuronal cell death where alprenolol is used only as a pharmacological antagonist to block beta-adrenoceptors, with no PK parameter reporting. |
| PD | Shiraki_1998 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for noradrenaline (EC50 13 μM) and antagonist potency for phentolamine (IC50 1.5 nM), but explicitly states that alprenolol had no effect on cell survival or NA-induced cell death, providing no numeric PD parameters for alprenolol. |
| popPK | Steinkraus_1990 | irrelevant | 0 | 0 | In-vitro radioligand binding study; alprenolol is only a displacing ligand with an IC50, no PK parameters. |
| popPK | Stevens_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor ligand efficacy (agonism/antagonism) and does not report pharmacokinetic disposition parameters for alprenolol. |
| PD | Stevens_1998 | not_relevant | 1 | 0 | The paper mentions alprenolol only qualitatively as a partial agonist in a cell-based assay and does not provide specific numeric PD parameters (e.g., EC50, Emax) for alprenolol in the provided text. |
| popPK | Street_1984 | irrelevant | 0 | 0 | In-vitro synaptosomal uptake inhibition study; alprenolol is only one of many tested compounds with no PK disposition parameters. |
| popPK | Subbarao_1990 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Subbarao_1990 | not_relevant | 0 | 0 | The paper studies adrenergic agonists on astrocytes and does not mention alprenolol or report any pharmacodynamic parameters for it. |
| popPK | Sugasawa_1992 | irrelevant | 0 | 0 | Alprenolol is used only as an in-vitro antagonist tool in a pharmacology study; no PK parameters reported. |
| popPK | Svoboda_1986 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Svoboda_1986 | not_relevant | 1 | 0 | The paper mentions alprenolol qualitatively as an inhibitor of Na,K-ATPase at a concentration range (10^-5-10^-3 M) but does not provide specific numeric PD parameters (like EC50 or Emax) for alprenolol, nor does it present a dose-response curve or model for it. |
| popPK | Taira_2010 | irrelevant | 0 | 0 | This is a pharmacology review on inverse agonism at β-adrenoceptors; alprenolol is only mentioned as an example drug, with no PK parameters or numeric values. |
| PD | Taira_2010 | not_relevant | 1 | 0 | The text is a qualitative introduction/review discussing the concept of inverse agonism and mentions alprenolol as an example, but it does not report any specific experimental data, concentration-effect curves, or numeric PD parameters. |
| popPK | Tomei_1976 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile responses in rat vas deferens, not a pharmacokinetic study. |
| popPK | Unsworth_1992 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Unsworth_1992 | not_relevant | 0 | 0 | The paper focuses on 5-HT1B receptor regulation in opossum kidney cells and does not mention alprenolol or report any pharmacodynamic parameters for it. |
| popPK | Wainscott_2007 | irrelevant | 0 | 0 | The study is a receptor pharmacology investigation of TAAR1 where alprenolol is used solely as a non-specific antagonist to block beta-adrenoceptors, rather than as the subject of pharmacokinetic analysis. |
| PD | Wainscott_2007 | not_relevant | 0 | 0 | The paper uses alprenolol solely as a non-specific beta-adrenoceptor blocker to isolate TAAR1 signaling; it does not report a pharmacodynamic or exposure-response relationship for alprenolol itself. |
| popPK | Wiersinga_1991 | irrelevant | 0 | 0 | The study focuses on propranolol and thyroid hormone metabolism, mentioning alprenolol only as a comparator for membrane-stabilizing activity without providing any PK parameters for alprenolol. |
| popPK | Winther_1985 | irrelevant | 0 | 0 | In-vitro receptor binding/pharmacodynamics study; alprenolol is only a blocking agent, no PK disposition parameters. |
| popPK | Witczyńska_2025 | irrelevant | 0 | 0 | The paper is a review of propranolol's structural and pharmacological properties, using alprenolol only as a structural comparator with no quantitative PK parameter values reported. |
| PGx | Witczyńska_2025 | not_relevant | 0 | 0 | The paper discusses propranolol and compares its structure to alprenolol but does not report a pharmacogenomic effect on a PK or PD parameter of alprenolol. |
| popPK | Yamamoto_2003 | irrelevant | 1 | 1 | In-vitro CYP2D6 inhibition study reporting only IC50 values, no PK disposition parameters for alprenolol. |
| PD | Yamamoto_2003 | not_relevant | 0 | 0 | The paper describes a high-throughput screening assay for drug metabolism using CYP2D6 and liver microsomes, and does not report any pharmacodynamic or exposure-response data for alprenolol. |
| PGx | Yamamoto_2003 | not_relevant | 0 | 0 | The paper uses alprenolol as an inhibitor to assess CYP2D6 activity, not as a substrate to measure how genetic variants affect its own pharmacokinetics or pharmacodynamics. |
| popPK | Yang_1990 | irrelevant | 0 | 0 | The study focuses on metoprolol pharmacokinetics, using alprenolol only as an internal standard for the assay. |
| popPK | Yang_1992 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of the drug "Guan-fu base A" in rabbits, using alprenolol only as an internal standard for the analytical method; no PK parameters for alprenolol are reported. |
| popPK | de_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology paper investigating receptor signaling in bovine tissue, not a pharmacokinetic study reporting disposition parameters for alprenolol. |
| PD | de_2000 | not_relevant | 1 | 0 | The paper investigates constitutive receptor activity and inverse agonism in bovine tracheal smooth muscle; alprenolol is only mentioned in a qualitative rank order of efficacy, with no numeric PD parameters or exposure-response relationship reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
