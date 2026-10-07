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
| 2026-10-06 23:05 | 2:52 | 0/0/0 | 0/1/0 | 0/0/0 | 83,930/4,102 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cleveland_2019_EGF_mediated_JB6_P_colony_formation](drugs/drug_alprenolol/pd_Cleveland_2019_EGF_mediated_JB6_P_colony_formation.md) | EGF-mediated JB6 P+ colony formation ← alprenolol · direct sigmoid Emax (Hill) effect | — | Cleveland KH et al., Carvedilol inhibits EGF-mediated JB6 P+…, PloS one (2019) | [10.1371/journal.pone.0217038](https://doi.org/10.1371/journal.pone.0217038) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alprenolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target), HTR1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 140 matched, 136 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alván_1977.pdf` | Alván G et al., Effect of pentobarbital on the disposit…, Clinical pharmacology and t… (1977) | popPK | 9 | [10.1002/cpt1977223316](https://doi.org/10.1002/cpt1977223316) | [891097](https://pubmed.ncbi.nlm.nih.gov/891097) | The study reports quantitative PK parameters (AUC, hepatic extraction ratio, clearance) for alprenolol in humans, with specific numeric values provided in the abstract. |
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

<sub>queue written 2026-10-06T23:05:05.752571+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ablad_1974 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | Adie_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring GPCR activation and alprenolol is used only as a reference antagonist to validate the assay, with no pharmacokinetic parameters reported. |
| popPK | Aellig_1982 | irrelevant | 1 | 0 | This is a clinical pharmacology review of pindolol; alprenolol is only mentioned as a comparator with no PK parameters reported. |
| popPK | Audus_1982 | irrelevant | 0 | 0 | The study investigates the mechanism of action of propranolol and other beta-blockers on murine lymphocytes using fluorescent probes, not pharmacokinetic parameters. |
| PD | Audus_1982 | not_relevant | 2 | 1 | The paper focuses on propranolol's mechanism of action on lymphocytes using fluorescent probes; alprenolol is only mentioned as a comparator for qualitative comparison, and no numeric PD parameters or exposure-response curves for alprenolol are provided. |
| popPK | Barrett_1970 | irrelevant | 0 | 0 | The study reports pharmacodynamic chronotropic activity and receptor blocking potency, not pharmacokinetic disposition parameters. |
| popPK | Bianchetti_1990 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | Bianchetti_1990 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of intestinal motility by phenylethanolaminotetralines in rat colon and does not report any pharmacodynamic or exposure-response data for alprenolol. |
| popPK | Bodewei_1988 | irrelevant | 0 | 0 | In-vitro electrophysiology study of propranolol on calcium currents; alprenolol is only a reference compound with no PK parameters. |
| popPK | Box_1989 | irrelevant | 0 | 0 | In-vitro receptor binding study in S49 cells; no pharmacokinetic disposition parameters for alprenolol. |
| popPK | Branch_1984 | irrelevant | 2 | 0 | The paper is a review discussing enzyme induction effects on clearance qualitatively (percent changes) without reporting specific quantitative PK parameter values (CL, V, t1/2) for alprenolol. |
| popPK | Capponi_1977 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of renin release in rat kidney slices, not a pharmacokinetic study of alprenolol. |
| popPK | Cleveland_2019 | irrelevant | 0 | 0 | This is an in-vitro pharmacology/cancer chemoprevention study of β-blockers in JB6 cells; alprenolol appears only as a comparator ligand with IC50/Kd values, no PK disposition parameters. |
| popPK | Collste_1976 | irrelevant | 4 | 2 | The study reports steady-state plasma concentrations and pharmacodynamic correlations but does not provide quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Collste_1976_2 | irrelevant | 2 | 0 | The study focuses on the relationship between steady-state plasma concentrations and blood pressure response (pharmacodynamics) rather than reporting quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Croci_1988 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Croci_1988 | not_relevant | 0 | 0 | The paper focuses on the inhibition of rat colon motility by atypical beta-adrenoceptor agonists and does not report pharmacodynamic or exposure-response data for alprenolol. |
| popPK | Cunliffe_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay for adenylyl cyclase activity where alprenolol is used as a pharmacological probe, not a pharmacokinetic study. |
| popPK | De_1995 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of SR 58611A on canine colonic motility, using alprenolol only as a non-selective beta-adrenoceptor antagonist for competitive antagonism (pA2), not as the subject of a pharmacokinetic analysis. |
| popPK | De_1995_2 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | De_1995_2 | not_relevant | 0 | 0 | The paper investigates beta-3 adrenoceptor function in guinea pig tissues and does not report any pharmacokinetic or pharmacodynamic data for alprenolol. |
| popPK | Drira-Chaabane_1996 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PGx | Eichelbaum_1984 | not_relevant | 3 | 0 | The paper mentions alprenolol as a substrate affected by the PM phenotype but provides no specific PK/PD data, effect sizes, or quantitative parameters for alprenolol. |
| popPK | Fowler_1991 | irrelevant | 0 | 0 | no_text gate: only 204 chars of text extracted (&lt; 400) |
| PD | Fowler_1991 | not_relevant | 0 | 0 | The paper investigates serotonin agonists and muscarinic receptors in neuroblastoma cells and does not mention alprenolol or report any pharmacodynamic parameters for it. |
| popPK | Fowler_1992 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of 5-HT1A receptors where alprenolol is used solely as a non-selective beta-blocker antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Fowler_1992 | not_relevant | 3 | 2 | The paper reports a pA2 value (7.0) for (-)-alprenolol as a competitive antagonist in an in vitro cAMP assay, which is a pharmacological potency parameter but not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Fyles_1986 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and functional assay using alprenolol as a pharmacological tool, not a pharmacokinetic study. |
| PD | Fyles_1986 | not_relevant | 3 | 2 | The paper reports receptor binding densities and qualitative functional effects (e.g., abolition of response by 1 µM alprenolol) but does not provide a quantitative concentration-effect curve or numeric PD parameters (like IC50 or Emax) for alprenolol itself. |
| popPK | Garcia_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance study of nightmare reporting odds ratios, with no PK disposition parameters for alprenolol. |
| popPK | Ghahary_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study using alprenolol only as a ligand; no PK disposition parameters. |
| popPK | Golf_1986 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study (adenylate cyclase/binding IC50s), no PK disposition parameters for alprenolol. |
| popPK | Green_1983 | irrelevant | 0 | 0 | This is an in-vitro receptor binding study reporting IC50 values, not pharmacokinetic disposition parameters for alprenolol. |
| popPK | Gugler_1976 | irrelevant | 2 | 0 | The paper is a review summarizing general pharmacokinetic properties (half-life, bioavailability) without reporting specific quantitative disposition parameters (CL, V, Q, ka) or a compartmental model for alprenolol. |
| popPK | Hanasaki_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay in rabbit platelets where alprenolol is used only as a pharmacological antagonist, not a subject of pharmacokinetic analysis. |
| popPK | Jaspersen_2000 | irrelevant | 0 | 0 | The paper is a review of drug-induced oesophageal disorders and mentions alprenolol only as a causative agent for injury, providing no pharmacokinetic data. |
| popPK | Jeong_2012 | irrelevant | 0 | 0 | In-vitro electrophysiology study of carvedilol on Kv1.5 channels; alprenolol is only a comparator with no PK parameters. |
| PD | Jeong_2012 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, rate constants) for carvedilol, but explicitly states that alprenolol had little or no effect on Kv1.5 currents, providing no numeric PD relationship for alprenolol. |
| popPK | Jiang_1978 | irrelevant | 0 | 0 | The study focuses on the synthesis and distribution of radioiodinated derivatives of beta-blockers for imaging, not the pharmacokinetic parameters (CL, V, etc.) of alprenolol itself. |
| popPK | Johnson_1993 | irrelevant | 0 | 0 | The study investigates serotonin receptor modulation of tyrosine hydroxylation, using alprenolol only as a pharmacological antagonist, not as a subject for PK analysis. |
| PD | Johnson_1993 | not_relevant | 0 | 0 | The paper investigates serotonin 5-HT1A receptor modulation of tyrosine hydroxylation; alprenolol is used only as a 5-HT1A antagonist to confirm receptor specificity, not as the drug of interest for a PD/exposure-response analysis. |
| popPK | Johnsson_1976 | irrelevant | 2 | 0 | This is a review article that discusses alprenolol qualitatively (e.g., low bioavailability) but does not report specific quantitative PK parameter values (CL, V, t1/2) for alprenolol in the provided text. |
| popPK | Johnsson_1976_2 | irrelevant | 1 | 0 | The text is a general review discussing the pharmacokinetics of beta-blockers qualitatively without providing specific quantitative parameter values (CL, V, t1/2) for alprenolol. |
| popPK | Kaukel_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-adrenergic receptor binding and cAMP levels in guinea pig tracheae, not a pharmacokinetic study of alprenolol. |
| popPK | Kessler_1991 | irrelevant | 0 | 0 | Alprenolol appears only as a test ligand in an in vitro receptor-binding study; no PK parameters for it are reported. |
| PD | Kessler_1991 | not_relevant | 0 | 0 | The paper characterizes a radioligand ([125I]epidepride) and reports in vitro binding affinities (IC50) for various compounds including alprenolol, but does not report a pharmacodynamic exposure-response or dose-response relationship for alprenolol itself. |
| popPK | Klug_1994 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Kousvelari_1983 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study of a derivative (BrAlpM) in rat parotid cells; no PK disposition parameters for alprenolol. |
| popPK | Krämer_2016 | irrelevant | 0 | 0 | The paper is a mechanistic study on membrane permeation of tetracycline and rifampicin, and does not report pharmacokinetic parameters for alprenolol. |
| popPK | Kubrusly_2007 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation in avian retinas where alprenolol is used only as a non-specific antagonist control, with no pharmacokinetic parameters reported. |
| PD | Kubrusly_2007 | not_relevant | 0 | 0 | The paper uses alprenolol only as a qualitative antagonist to block beta-adrenergic effects; it does not report a concentration-effect or dose-response relationship for alprenolol itself. |
| popPK | Kusiak_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism (adenylate cyclase inhibition) of alprenolol derivatives, not on quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Kusiak_1987 | irrelevant | 0 | 0 | This is a receptor-binding study of a cyanopindolol analogue; alprenolol appears only as a radioligand/protecting agent, with no PK parameters. |
| PD | Kusiak_1987 | not_relevant | 3 | 2 | The paper reports receptor binding displacement (IC50) and qualitative in vivo dose effects on receptor density, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50 for functional effect) for alprenolol itself. |
| popPK | Landi_1992 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Landi_1992 | not_relevant | 0 | 0 | The paper reports in vitro radioligand binding competition assays, not pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| popPK | Lima_1996 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Lima_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships for alprenolol. |
| popPK | MacEwan_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor number and agonist efficacy, not a pharmacokinetic study of alprenolol. |
| PD | MacEwan_1995 | not_relevant | 4 | 3 | The paper analyzes concentration-response curves for beta-agonists in cell lines, but alprenolol is only mentioned as a component of the irreversible antagonist BAAM used to reduce receptor density, not as the subject of a PD or exposure-response analysis. |
| popPK | Maderspach_1982 | irrelevant | 0 | 0 | The study investigates in vitro receptor binding kinetics (Bmax, Kd) of alprenolol in brain cells, not pharmacokinetic disposition parameters. |
| PD | Maderspach_1982 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding kinetics and affinity parameters (Kd, Bmax, Hill coefficient) for alprenolol, which are pharmacological binding data, not pharmacodynamic (exposure-response or dose-response) effect data. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Maideen_2021 | not_relevant | 1 | 0 | The paper is a qualitative review of drug interactions and does not report specific numeric PD parameters or concentration-effect curves for alprenolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions, not pharmacogenomic effects of gene variants on alprenolol PK/PD. |
| popPK | Man_1982 | irrelevant | 0 | 0 | The paper is a review of haemodynamic effects and plasma noradrenaline concentrations, not a pharmacokinetic study reporting disposition parameters for alprenolol. |
| popPK | Man_1983 | irrelevant | 0 | 0 | The paper is a review of haemodynamic effects and does not report quantitative pharmacokinetic parameters for alprenolol. |
| popPK | Mauger_1980 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay, not a pharmacokinetic study of alprenolol disposition. |
| popPK | Mazzocchi_1998 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Mazzocchi_1998 | not_relevant | 0 | 0 | The paper focuses on the interaction between angiotensin receptors and catecholamine/aldosterone release in rats, with no mention of alprenolol or its pharmacodynamic parameters. |
| popPK | Millan_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT1A receptors and opioid antinociception, using alprenolol only as a putative antagonist/comparator, with no pharmacokinetic parameters reported. |
| popPK | Millan_1992 | irrelevant | 0 | 0 | The paper studies the pharmacology of S 14671, using alprenolol only as a 5-HT1A antagonist control, and reports no pharmacokinetic parameters for alprenolol. |
| PD | Millan_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of S 14671; alprenolol is only mentioned as a non-specific antagonist used to block effects, with no PD or exposure-response analysis for alprenolol. |
| popPK | Millan_1994 | irrelevant | 0 | 0 | The paper is a pharmacological study of benzodioxopiperazines where alprenolol is used only as a reference compound for receptor binding affinity, not a PK study. |
| popPK | Nakamura_1991 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating alpha-2/beta-adrenergic interactions, not a pharmacokinetic study of alprenolol disposition. |
| PD | Nakamura_1991 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities and Hill coefficients, not pharmacodynamic exposure-response or dose-response relationships for alprenolol. |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of SR 58611A in rat brown adipose tissue, using alprenolol only as a non-selective antagonist control without reporting any pharmacokinetic parameters for alprenolol. |
| PD | Nisoli_1994 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for the agonist SR 58611A, but alprenolol is only mentioned qualitatively as a non-selective antagonist used at high doses to confirm receptor subtype, with no numeric PD parameters or dose-response curve provided for alprenolol itself. |
| popPK | Nonogaki_1995 | irrelevant | 0 | 0 | The study investigates lipid metabolism in rats, using alprenolol only as a pharmacological tool to block beta-adrenergic receptors, not as the subject of pharmacokinetic analysis. |
| popPK | Ogg_1987 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of propranolol metabolites on beta-receptors, using alprenolol only as a radioligand for binding assays, and does not report pharmacokinetic parameters for alprenolol. |
| popPK | Rane_1977 | irrelevant | 2 | 0 | The study is an in vitro/in situ mechanistic investigation of hepatic extraction ratios in rat livers, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for alprenolol in a physiological context. |
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
| popPK | Shimizu_2009 | irrelevant | 0 | 0 | The paper is a review of beta blockers in migraine prophylaxis and does not report original quantitative pharmacokinetic parameters for alprenolol. |
| popPK | Shiraki_1998 | irrelevant | 0 | 0 | The study is a mechanistic cell death assay in chick neurons where alprenolol is used only as a pharmacological tool (beta-blocker) to determine receptor subtype involvement, not as a subject of PK analysis. |
| PD | Shiraki_1998 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for noradrenaline (EC50 13 μM) and antagonist potency for phentolamine (IC50 1.5 nM), but explicitly states that alprenolol had no effect on cell survival or NA-induced cell death, providing no numeric PD parameters for alprenolol. |
| popPK | Steinkraus_1990 | irrelevant | 0 | 0 | In-vitro radioligand binding study; alprenolol is only a displacing ligand with an IC50, no PK parameters. |
| popPK | Stevens_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor efficacy and does not report any pharmacokinetic parameters for alprenolol. |
| PD | Stevens_1998 | not_relevant | 1 | 0 | The paper mentions alprenolol only qualitatively as a partial agonist in a cell-based assay and does not provide specific numeric PD parameters (e.g., EC50, Emax) for alprenolol in the provided text. |
| popPK | Street_1984 | irrelevant | 0 | 0 | In-vitro synaptosomal uptake inhibition study; alprenolol is only one of many tested compounds with no PK disposition parameters. |
| popPK | Subbarao_1990 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Subbarao_1990 | not_relevant | 0 | 0 | The paper studies adrenergic agonists on astrocytes and does not mention alprenolol or report any pharmacodynamic parameters for it. |
| popPK | Sugasawa_1992 | irrelevant | 0 | 0 | Alprenolol is used only as an in-vitro antagonist tool in a pharmacology study; no PK parameters reported. |
| popPK | Svoboda_1986 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Svoboda_1986 | not_relevant | 1 | 0 | The paper mentions alprenolol qualitatively as an inhibitor of Na,K-ATPase at a concentration range (10^-5-10^-3 M) but does not provide specific numeric PD parameters (like EC50 or Emax) for alprenolol, nor does it present a dose-response curve or model for it. |
| popPK | Taira_2010 | irrelevant | 0 | 0 | This is a pharmacology review on inverse agonism at β-adrenoceptors; alprenolol is only mentioned as an example drug, with no PK parameters or numeric values. |
| PD | Taira_2010 | not_relevant | 1 | 0 | The text is a qualitative introduction/review discussing the concept of inverse agonism and mentions alprenolol as an example, but it does not report any specific experimental data, concentration-effect curves, or numeric PD parameters. |
| popPK | Tomei_1976 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenergic responses in rat vas deferens, not a pharmacokinetic study of alprenolol. |
| popPK | Unsworth_1992 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Unsworth_1992 | not_relevant | 0 | 0 | The paper focuses on 5-HT1B receptor regulation in opossum kidney cells and does not mention alprenolol or report any pharmacodynamic parameters for it. |
| popPK | Wainscott_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of the TAAR1 receptor, using alprenolol only as a non-specific beta-blocker to isolate receptor activity, with no pharmacokinetic parameters reported. |
| PD | Wainscott_2007 | not_relevant | 0 | 0 | The paper uses alprenolol solely as a non-specific beta-adrenoceptor blocker to isolate TAAR1 signaling; it does not report a pharmacodynamic or exposure-response relationship for alprenolol itself. |
| popPK | Wiersinga_1991 | irrelevant | 0 | 0 | The paper focuses on the effects of propranolol on thyroid hormone metabolism, with alprenolol mentioned only as a comparator for membrane-stabilizing activity, and no PK parameters for alprenolol are reported. |
| popPK | Winther_1985 | irrelevant | 0 | 0 | In-vitro receptor binding/pharmacodynamics study; alprenolol is only a blocking agent, no PK disposition parameters. |
| popPK | Witczyńska_2025 | irrelevant | 0 | 0 | The paper is a review of propranolol's crystallography and pharmacology, with alprenolol mentioned only as a structural comparator, and no quantitative PK parameters are reported. |
| PGx | Witczyńska_2025 | not_relevant | 0 | 0 | The paper is a structural and pharmacological review of propranolol that mentions alprenolol only for structural comparison, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Yamamoto_2003 | irrelevant | 1 | 1 | In-vitro CYP2D6 inhibition study reporting only IC50 values, no PK disposition parameters for alprenolol. |
| PD | Yamamoto_2003 | not_relevant | 0 | 0 | The paper describes a high-throughput screening assay for drug metabolism using CYP2D6 and liver microsomes, and does not report any pharmacodynamic or exposure-response data for alprenolol. |
| PGx | Yamamoto_2003 | not_relevant | 0 | 0 | The paper describes an in vitro assay method for estimating enzyme involvement in drug metabolism and does not report pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Yang_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metoprolol, using alprenolol only as an internal standard for the analytical method. |
| popPK | Yang_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Guan-fu base A in rabbits, using alprenolol only as an internal standard for the analytical method. |
| popPK | de_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of beta-adrenergic receptors in bovine tissue, not a pharmacokinetic study of alprenolol. |
| PD | de_2000 | not_relevant | 1 | 0 | The paper investigates constitutive receptor activity and inverse agonism in bovine tracheal smooth muscle; alprenolol is only mentioned in a qualitative rank order of efficacy, with no numeric PD parameters or exposure-response relationship reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
