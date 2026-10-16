<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;alprostadil&quot;}]"></div>

# alprostadil

- **generic name:** alprostadil
- **ATC codes:** `C01EA01`, `G04BE01`
- **DrugBank:** [DB00770](https://go.drugbank.com/drugs/DB00770) · **PubChem:** [CID 149351](https://pubchem.ncbi.nlm.nih.gov/compound/149351)
- **molar mass:** 354.487 g/mol (C20H34O5) — DrugBank
- **groups:** approved, investigational

## About

Alprostadil, a prostaglandin vasodilator, is used to treat erectile dysfunction and to maintain the ductus open in certain congenital heart defects. It is an approved medicine, included on the WHO list of essential medicines, and is used worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q579348](https://www.wikidata.org/wiki/Q579348) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:35 | 3:23 | 0/0/0 | 1/1/0 | 0/0/0 | 252,267/10,016 | einfracz / qwen3.8-27b | 15 | 7/16 | 15/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boyadjieva_1997_IR_beta_EP](drugs/drug_alprostadil/pd_Boyadjieva_1997_IR_beta_EP.md) | beta-endorphin release ← PGE1 · direct Emax (saturable) effect | — | Boyadjieva NI et al., Effects of ethanol on basal and prostag…, Alcoholism, clinical and ex… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boyadjieva_1997_cAMP](drugs/drug_alprostadil/pd_Boyadjieva_1997_cAMP.md) | intracellular cAMP levels ← PGE1 · direct Emax (saturable) effect | — | Boyadjieva NI et al., Effects of ethanol on basal and prostag…, Alcoholism, clinical and ex… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kikura_2000_disaggregation](drugs/drug_alprostadil/pd_Kikura_2000_disaggregation.md) | percentage of disaggregation ← PGE1 · stimulation effect | — | Kikura M et al., Disaggregatory effects of prostaglandin…, Platelets (2000) | [10.1080/09537100020027824](https://doi.org/10.1080/09537100020027824) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alprostadil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC4` substrate, `SLC22A6` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (inhibitor), HPGD (substrate), PTGDR2 (target), PTGER1 (target), PTGER2 (target), PTGER3 (target), PTGER4 (target), SLCO2A1 (substrate), SLCO3A1 (inhibitor), SLCO3A1 (substrate), TBXA2R (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 527 matched, 186 returned
- **screened:** 6  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_28 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bek_1999.pdf` | Bek M et al., Characterization of prostanoid receptor…, Journal of the American Soc… (1999) | pd | 5 | [10.1681/ASN.V10102084](https://doi.org/10.1681/ASN.V10102084) | [10505684](https://www.ncbi.nlm.nih.gov/pubmed/10505684) | metadata signals extractable PD data (EC50) |
| `Chia_2021.pdf` | Chia YL et al., Exposure-response analysis for selectio…, Rheumatology (Oxford, Engla… (2021) | pd | 5 | [10.1093/rheumatology/keab176](https://doi.org/10.1093/rheumatology/keab176) | [33629110](https://www.ncbi.nlm.nih.gov/pubmed/33629110) | metadata signals extractable PD data (Exposure-response) |
| `Gu_2007.pdf` | Gu FG et al., Pharmacodynamic comparison of prostagla…, Yao xue xue bao = Acta phar… (2007) | pd | 5 | not captured | [17882966](https://www.ncbi.nlm.nih.gov/pubmed/17882966) | metadata signals extractable PD data (Emax) |
| `Zeng_1995.pdf` | Zeng L et al., Independent down-regulation of EP2 and…, Immunology (1995) | pd | 5 | not captured | [8567030](https://www.ncbi.nlm.nih.gov/pubmed/8567030) | metadata signals extractable PD data (IC50) |
| `Adam_1994.pdf` | Adam M et al., Cloning and expression of three isoform…, FEBS letters (1994) | pd | 4 | [10.1016/0014-5793(94)80358-7](https://doi.org/10.1016/0014-5793(94)80358-7) | [8307176](https://www.ncbi.nlm.nih.gov/pubmed/8307176) | metadata signals extractable PD data (IC50) |
| `Aikawa_1990.pdf` | Aikawa T et al., Inhibitory actions of prostaglandin E1…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb12080.x](https://doi.org/10.1111/j.1476-5381.1990.tb12080.x) | [2282455](https://www.ncbi.nlm.nih.gov/pubmed/2282455) | metadata signals extractable PD data (EC50) |
| `Allegaert_2013.pdf` | Allegaert K et al., The paracetamol concentration-effect re…, Paediatric anaesthesia (2013) | pd | 4 | [10.1111/pan.12076](https://doi.org/10.1111/pan.12076) | [23170854](https://www.ncbi.nlm.nih.gov/pubmed/23170854) | metadata signals extractable PD data (concentration-effect) |
| `Ashby_1986.pdf` | Ashby B, Kinetic evidence indicating separate st…, Journal of cyclic nucleotid… (1986) | pd | 4 | not captured | [2432105](https://www.ncbi.nlm.nih.gov/pubmed/2432105) | metadata signals extractable PD data (EC50) |
| `Crankshaw_1994.pdf` | Crankshaw DJ et al., Effects of some naturally occurring pro…, Canadian journal of physiol… (1994) | pd | 4 | [10.1139/y94-123](https://doi.org/10.1139/y94-123) | [7834575](https://www.ncbi.nlm.nih.gov/pubmed/7834575) | metadata signals extractable PD data (Concentration-effect) |
| `Crider_1998.pdf` | Crider JY et al., Prostaglandin-stimulated adenylyl cycla…, Journal of ocular pharmacol… (1998) | pd | 4 | [10.1089/jop.1998.14.293](https://doi.org/10.1089/jop.1998.14.293) | [9715432](https://www.ncbi.nlm.nih.gov/pubmed/9715432) | metadata signals extractable PD data (EC50) |
| `Crider_2001.pdf` | Crider JY et al., Functional pharmacological evidence for…, Journal of ocular pharmacol… (2001) | pd | 4 | [10.1089/108076801750125658](https://doi.org/10.1089/108076801750125658) | [11322636](https://www.ncbi.nlm.nih.gov/pubmed/11322636) | metadata signals extractable PD data (EC50) |
| `Filippi_2000.pdf` | Filippi S et al., Functional adenosine receptors in human…, International journal of an… (2000) | pd | 4 | [10.1046/j.1365-2605.2000.00232.x](https://doi.org/10.1046/j.1365-2605.2000.00232.x) | [10886423](https://www.ncbi.nlm.nih.gov/pubmed/10886423) | metadata signals extractable PD data (IC50) |
| `Henry_1987.pdf` | Henry DY et al., Isolation and characterization of 9-hyd…, European journal of biochem… (1987) | pd | 4 | [10.1111/j.1432-1033.1987.tb13712.x](https://doi.org/10.1111/j.1432-1033.1987.tb13712.x) | [3691528](https://www.ncbi.nlm.nih.gov/pubmed/3691528) | metadata signals extractable PD data (EC50) |
| `Kihara_1995.pdf` | Kihara M et al., Vasoreactivity to prostaglandins of rat…, The Journal of physiology (1995) | pd | 4 | [10.1113/jphysiol.1995.sp020678](https://doi.org/10.1113/jphysiol.1995.sp020678) | [7602538](https://www.ncbi.nlm.nih.gov/pubmed/7602538) | metadata signals extractable PD data (EC50) |
| `Lydford_1994.pdf` | Lydford SJ et al., Characterization of the prostaglandin E…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13042.x](https://doi.org/10.1111/j.1476-5381.1994.tb13042.x) | [8032634](https://www.ncbi.nlm.nih.gov/pubmed/8032634) | metadata signals extractable PD data (concentration-effect) |
| `McKinney_1986.pdf` | McKinney M et al., Effect of the antitumor drug caracemide…, Biochemical pharmacology (1986) | pd | 4 | [10.1016/0006-2952(86)90061-4](https://doi.org/10.1016/0006-2952(86)90061-4) | [2874811](https://www.ncbi.nlm.nih.gov/pubmed/2874811) | metadata signals extractable PD data (EC50) |
| `McKinney_1989.pdf` | McKinney M et al., Biochemical evidence for somatostatin r…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90330-0](https://doi.org/10.1016/0014-2999(89)90330-0) | [2568262](https://www.ncbi.nlm.nih.gov/pubmed/2568262) | metadata signals extractable PD data (EC50) |
| `Mukhopadhyay_1998.pdf` | Mukhopadhyay S et al., G protein-coupled prostaglandin recepto…, The American journal of phy… (1998) | pd | 4 | [10.1152/ajplung.1998.274.4.L567](https://doi.org/10.1152/ajplung.1998.274.4.L567) | [9575875](https://www.ncbi.nlm.nih.gov/pubmed/9575875) | metadata signals extractable PD data (IC50) |
| `Murphy_1987.pdf` | Murphy MG et al., Effects of membrane polyunsaturated fat…, Biochemical pharmacology (1987) | pd | 4 | [10.1016/0006-2952(87)90564-8](https://doi.org/10.1016/0006-2952(87)90564-8) | [2825714](https://www.ncbi.nlm.nih.gov/pubmed/2825714) | metadata signals extractable PD data (EC50) |
| `Neufeld_1992.pdf` | Neufeld TK et al., In vitro formation and expansion of cys…, Kidney international (1992) | pd | 4 | [10.1038/ki.1992.184](https://doi.org/10.1038/ki.1992.184) | [1319521](https://www.ncbi.nlm.nih.gov/pubmed/1319521) | metadata signals extractable PD data (EC50) |
| `Ohia_1991.pdf` | Ohia SE et al., Prejunctional prostaglandin receptors i…, Current eye research (1991) | pd | 4 | [10.3109/02713689109020333](https://doi.org/10.3109/02713689109020333) | [1659973](https://www.ncbi.nlm.nih.gov/pubmed/1659973) | metadata signals extractable PD data (EC50) |
| `Umeki_1994.pdf` | Umeki S, Prostaglandin E and analogs of prostacy…, The International journal o… (1994) | pd | 4 | [10.1016/0020-711x(94)90071-x](https://doi.org/10.1016/0020-711x(94)90071-x) | [8088410](https://www.ncbi.nlm.nih.gov/pubmed/8088410) | metadata signals extractable PD data (IC50) |
| `Virgolini_1992.pdf` | Virgolini I et al., Characterization of prostaglandin (PG)-…, The Journal of biological c… (1992) | pd | 4 | not captured | [1377673](https://www.ncbi.nlm.nih.gov/pubmed/1377673) | metadata signals extractable PD data (IC50) |
| `Wainman_1988.pdf` | Wainman BC et al., The effects of prostanoids on estrogen-…, Biology of reproduction (1988) | pd | 4 | [10.1095/biolreprod39.2.221](https://doi.org/10.1095/biolreprod39.2.221) | [2902883](https://www.ncbi.nlm.nih.gov/pubmed/2902883) | metadata signals extractable PD data (EC50) |
| `Widomski_1997.pdf` | Widomski D et al., The prostaglandin analogs, misoprostol…, Immunopharmacology and immu… (1997) | pd | 4 | [10.3109/08923979709007656](https://doi.org/10.3109/08923979709007656) | [9130003](https://www.ncbi.nlm.nih.gov/pubmed/9130003) | metadata signals extractable PD data (IC50) |
| `Wilson_1993.pdf` | Wilson AJ et al., Adenylate cyclase-mediated vascular res…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13858.x](https://doi.org/10.1111/j.1476-5381.1993.tb13858.x) | [7902177](https://www.ncbi.nlm.nih.gov/pubmed/7902177) | metadata signals extractable PD data (EC50) |
| `Funck-Brentano_2013.pdf` | Funck-Brentano C et al., Effects of rabeprazole on the antiplate…, Archives of cardiovascular… (2013) | pgx | 7 | [10.1016/j.acvd.2013.09.002](https://doi.org/10.1016/j.acvd.2013.09.002) | [24246616](https://www.ncbi.nlm.nih.gov/pubmed/24246616) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Nooney_2015.pdf` | Nooney VB et al., Post receptor determinants of acute pla…, Vascular pharmacology (2015) | pgx | 5 | [10.1016/j.vph.2014.11.003](https://doi.org/10.1016/j.vph.2014.11.003) | [25460367](https://www.ncbi.nlm.nih.gov/pubmed/25460367) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-14T22:34:37.066690+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adaikan_1984 | irrelevant | 0 | 0 | The study investigates pharmacological actions (muscle relaxation, platelet aggregation) in guinea pigs and baboons without reporting quantitative pharmacokinetic parameters for alprostadil. |
| PD | Adaikan_1984 | not_relevant | 3 | 2 | The paper reports qualitative comparisons and a single relative potency ratio (EC50 ratio) for 6-oxo-PGE1 vs PGI2, but does not provide absolute numeric PD parameters (EC50, Emax) or a concentration-effect curve for alprostadil (PGE1). |
| PD | Adam_1994 | not_relevant | 0 | 0 | The paper reports receptor cloning and ligand binding affinity (IC50) for the EP3 receptor, but does not report a pharmacodynamic exposure-response or dose-response relationship for alprostadil. |
| popPK | Aikawa_1990 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Allegaert_2013 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| PD | Allegaert_2013 | not_relevant | 0 | 0 | The paper focuses on paracetamol in neonates, not alprostadil. |
| popPK | Almquist_2022 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Almquist_2022 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of anifrolumab, not alprostadil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Almquist_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anifrolumab, not alprostadil. |
| popPK | Altura_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of prostaglandin effects on isolated canine intrapulmonary vessels, not a pharmacokinetic study of alprostadil. |
| PD | Altura_1981 | not_relevant | 0 | 0 | The paper studies isolated canine intrapulmonary vessels and does not report pharmacodynamic or exposure-response data for alprostadil. |
| PD | Amann_2016 | not_relevant | 0 | 0 | The paper validates a platelet aggregation assay for P2Y12 inhibitors (clopidogrel/prasugrel) and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Ambrosioni_1993 | not_relevant | 1 | 0 | The text is a general review of prostanoid pharmacology and clinical trials, lacking any specific numeric PD parameters or exposure-response analysis for alprostadil. |
| popPK | Ammer_1995 | irrelevant | 0 | 0 | This is an in-vitro cell culture study investigating opioid regulation of prostaglandin E1 receptors, not a pharmacokinetic study of alprostadil. |
| PD | Ammer_1995 | not_relevant | 0 | 0 | The paper investigates the effect of chronic morphine exposure on PGE1 receptor binding and G-protein coupling in cell lines, not the pharmacodynamic or exposure-response relationship of alprostadil. |
| popPK | Angulo_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study characterizing pharmacodynamic relaxation responses, not a pharmacokinetic study reporting quantitative disposition parameters for alprostadil. |
| popPK | Angulo_2002 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study characterizing prostanoid receptor subtypes in tissue strips, not a pharmacokinetic study reporting alprostadil disposition parameters. |
| PD | Angulo_2002 | not_relevant | 0 | 0 | The paper reports in vitro pharmacology for various prostanoids (PGE1, PGI2, etc.) but does not report a PD or exposure-response relationship for alprostadil. |
| popPK | Angulo_2006 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of tissue reactivity to various prostanoids and agonists, not a pharmacokinetic study reporting disposition parameters for alprostadil. |
| PD | Angulo_2006 | not_relevant | 0 | 0 | The paper focuses on the mechanism of erectile dysfunction in diabetic patients involving thromboxane receptors and PKC, reporting EC50 values for U46619 (a TP agonist) and effects of inhibitors, but does not report a pharmacodynamic or exposure-response relationship for alprostadil. |
| popPK | Armstrong_1995 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of PGE2 effects on neutrophil chemotaxis, containing no pharmacokinetic data for alprostadil. |
| popPK | Ashby_1986 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Atmaca_2020 | not_relevant | 0 | 0 | The paper studies benzimidazole derivatives, not alprostadil. |
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper describes an in vitro safety strategy for a TCR-based antibody, not the pharmacokinetics of alprostadil. |
| PD | Augustin_2026 | not_relevant | 0 | 0 | The paper discusses a TCR-like T cell bispecific antibody (MAGE-A4-TCB), not alprostadil, and focuses on nonclinical safety and dose selection rather than pharmacodynamic modeling of the specified drug. |
| popPK | Banerjee_1985 | irrelevant | 0 | 0 | The study investigates the pharmacological effects (contractility, aggregation) of prostaglandin analogues, not the pharmacokinetic parameters of alprostadil. |
| popPK | Bassiouni_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of isolated rat corpus cavernosum smooth muscle relaxant effects and does not report any pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for alprostadil. |
| popPK | Beckmann_2019 | irrelevant | 0 | 0 | The paper describes phytoplankton ecosystem models and contains no data regarding the drug alprostadil or its pharmacokinetics. |
| popPK | Bek_1999 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Bek_1999 | not_relevant | 0 | 0 | The paper focuses on the characterization of prostanoid receptors in podocytes and does not report pharmacodynamic or exposure-response relationships for alprostadil. |
| PD | Bentur_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of RUC-4, not alprostadil. |
| PD | Bitgen_2026 | not_relevant | 0 | 0 | The paper investigates the effects of Thymus vulgaris extract and docetaxel, not alprostadil. |
| popPK | Boulay_2024 | irrelevant | 0 | 0 | The paper describes a new HIV-1 capsid inhibitor (H27) and contains no data, parameters, or mentions of alprostadil. |
| PD | Boulay_2024 | not_relevant | 0 | 0 | The paper studies the compound H27, not alprostadil, and reports no pharmacodynamic data for alprostadil. |
| popPK | Boyadjieva_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ethanol and prostaglandin E1 effects on beta-endorphin release, containing no pharmacokinetic parameters for alprostadil. |
| popPK | Brugger_2008 | irrelevant | 1 | 0 | The study is a pharmacological characterization of receptor agonists using isolated tissue and functional in vivo models, not a pharmacokinetic study reporting disposition parameters for alprostadil. |
| PGx | Brunton_1977 | not_relevant | 1 | 1 | The paper investigates PGE1 receptor binding and adenylate cyclase signaling in cell lines using cell fusion and variant analysis, but it does not study human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug alprostadil. |
| popPK | Burchert_1997 | irrelevant | 0 | 0 | The study uses PGE1 (alprostadil) as a vasodilator to induce blood flow changes measured by PET, but does not report pharmacokinetic parameters (CL, Vd, etc.) for the drug. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and dosing of tacrolimus, not alprostadil. |
| PD | Cao_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tacrolimus, not alprostadil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper studies RTA-408 (omaveloxolone), not alprostadil. |
| popPK | Chia_2021 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Chia_2021 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for anifrolumab, not alprostadil. |
| popPK | Chia_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Chia_2022 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of anifrolumab, not alprostadil. |
| popPK | Chia_2022_2 | irrelevant | 0 | 0 | The study evaluates anifrolumab pharmacokinetics, not alprostadil. |
| PD | Chia_2022_2 | not_relevant | 0 | 0 | The paper analyzes anifrolumab, not alprostadil. |
| PD | Cohan_1996 | not_relevant | 0 | 0 | The paper reports in vitro pharmacology for CP-80633, not alprostadil. |
| PD | Crankshaw_1994 | not_relevant | 0 | 0 | The paper reports concentration-effect data for various prostanoids (PGE2, PGF2 alpha, etc.) and COX inhibitors, but does not report any pharmacodynamic data or parameters for alprostadil. |
| popPK | Crider_1998 | irrelevant | 0 | 0 | The study characterizes EP2 receptor pharmacology and adenylyl cyclase activity in vitro, rather than reporting pharmacokinetic disposition parameters for alprostadil. |
| PD | Crider_1998 | not_relevant | 0 | 0 | The paper reports pharmacological data for PGE2 and other prostaglandins, but does not mention or provide data for alprostadil. |
| popPK | Crider_2001 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| PD | Cuzin_2016 | not_relevant | 1 | 0 | The text is a qualitative review/summary that mentions efficacy percentages and doses but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve. |
| popPK | DeForrest_1989 | irrelevant | 0 | 0 | The paper is a preclinical pharmacology study of zofenopril (an ACE inhibitor), not alprostadil, and reports pharmacodynamic rather than pharmacokinetic data. |
| PD | DeForrest_1989 | not_relevant | 0 | 0 | The paper discusses zofenopril, not alprostadil. |
| popPK | Desai_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on lung cancer resistance to targeted therapies (ALK/HER2) and does not mention alprostadil or report pharmacokinetic parameters. |
| PD | Desai_2026 | not_relevant | 0 | 0 | The paper focuses on stromal mechanisms of resistance to ALK inhibitors (e.g., alectinib) and does not mention alprostadil or report any pharmacodynamic exposure-response relationships for it. |
| popPK | Du_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for busulfan, not alprostadil. |
| PD | Du_2022 | not_relevant | 0 | 0 | The paper focuses on busulfan, not alprostadil, and reports PK parameters and clinical outcome correlations (AUC vs EFS) rather than a pharmacodynamic exposure-response model with numeric PD parameters like Emax or EC50. |
| PD | Filippi_2000 | not_relevant | 0 | 0 | The paper focuses on the functional characterization of adenosine receptors in human corpora cavernosa and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Flores_1975 | irrelevant | 0 | 0 | The paper investigates the effects of prostaglandin E1 (PGE1) on water flow and cyclic AMP in toad bladder, which is unrelated to the pharmacokinetics of alprostadil (PGE1). |
| PGx | Funck-Brentano_2013 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction (rabeprazole/omeprazole) with clopidogrel and does not investigate pharmacogenomic variants or the drug alprostadil. |
| popPK | Galant_1984 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of beta-adrenergic desensitization using isoproterenol and PGE1 (prostaglandin E1) as ligands, and does not report pharmacokinetic parameters for alprostadil (prostaglandin E2). |
| PD | Galant_1984 | not_relevant | 0 | 0 | The paper studies beta-adrenergic desensitization using isoproterenol and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper is a clinical study on pneumonia and mortality using machine learning, with no pharmacokinetic data or mention of alprostadil. |
| PD | Gao_2023 | not_relevant | 0 | 0 | The paper is a clinical cohort study on pneumonia outcomes and machine learning clustering; it does not report any pharmacokinetic or pharmacodynamic data for alprostadil. |
| PD | Garrido-Abad_2022 | not_relevant | 1 | 0 | The paper is a clinical efficacy study comparing treatment groups using subjective scores (IIEF-5, SEP) and does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Garrity_1983 | irrelevant | 0 | 0 | The study is a mechanistic investigation of receptor binding and enzyme activity in rat liver membranes, not a pharmacokinetic study of alprostadil disposition. |
| popPK | Gespach_1982 | irrelevant | 0 | 0 | The study characterizes histamine and PGE1 receptors in HL-60 cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | Gespach_1982 | not_relevant | 0 | 0 | The paper studies histamine and PGE1 receptor pharmacology in HL-60 cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Gespach_1985 | irrelevant | 0 | 0 | The study investigates histamine H2 receptor activity and cAMP generation in U-937 cells, using prostaglandins (PGE1) as agonists rather than characterizing the pharmacokinetics of alprostadil. |
| PD | Gespach_1985 | not_relevant | 0 | 0 | The paper discusses PGE1 (alprostadil) in the context of cell differentiation and cAMP generation, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve for alprostadil in a clinical or physiological context; it only lists an EC50 value for a receptor assay in a cell line, which is a pharmacological potency parameter, not a PD model parameter in the context of drug exposure. |
| popPK | Ghazi_2026 | irrelevant | 0 | 0 | The paper is a study protocol on sleep and technology use in older adults, with no mention of alprostadil or pharmacokinetics. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The paper investigates the immunological role of BATF2 in cancer and does not involve the drug alprostadil or any pharmacokinetic parameters. |
| PD | Gong_2025 | not_relevant | 0 | 0 | The paper investigates the role of BATF2 in tumor immunity and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Gu_2005 | irrelevant | 3 | 0 | The study focuses on pharmacodynamics (blood pressure) and formulation properties (solubility, mucociliary movement) of PGE1 (alprostadil) in rats, without reporting quantitative pharmacokinetic parameters like clearance, volume, or bioavailability in the provided text. |
| popPK | Gu_2007 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Gudat_1981 | irrelevant | 0 | 0 | The study investigates the shape change of rabbit platelets induced by peptides and NGF, not the pharmacokinetics of alprostadil. |
| PD | Gudat_1981 | not_relevant | 0 | 0 | The paper studies platelet shape changes induced by peptides (NGF, SP) and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Gupta_1998 | not_relevant | 0 | 0 | The paper investigates alpha2-adrenoceptor pharmacology in corpus cavernosum smooth muscle using UK 14,304 and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Hamasaki_1983 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic relaxant action of VIP on isolated cat pulmonary artery, not the pharmacokinetics or disposition parameters of alprostadil. |
| PD | Hellstrom_1994 | not_relevant | 0 | 0 | The paper investigates nitric oxide donors (s-nitrocysteine, sodium nitroprusside) and acetylcholine, not alprostadil. |
| popPK | Henry_1987 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Henry_1987 | not_relevant | 0 | 0 | The paper studies a plant-derived fatty acid (9-HODE), not alprostadil. |
| PD | Hirose_2000 | not_relevant | 0 | 0 | The paper studies NSP-513 and cilostazol, not alprostadil; alprostadil is only mentioned as PGE1 in an in vitro context without a PD model for the target drug. |
| PD | Hollande_1993 | not_relevant | 0 | 0 | The paper studies histamine release from isolated cells and does not report a pharmacodynamic or exposure-response relationship for alprostadil. |
| popPK | Holt_2019 | irrelevant | 0 | 0 | The paper describes in-silico homology modeling and docking of the EP4 receptor, not the pharmacokinetic disposition of alprostadil. |
| PD | Holt_2019 | not_relevant | 2 | 2 | The paper focuses on homology modeling and docking of the EP4 receptor; while it lists EC50 values for various agonists (including PGE1/alprostadil) to validate the model, it does not report a pharmacokinetic or exposure-response analysis for alprostadil. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a LCK degrader (SJ11646) and dasatinib in leukemia models, with no mention of alprostadil. |
| PD | Hu_2022 | not_relevant | 0 | 0 | The paper discusses a PROTAC compound (SJ11646) for T-ALL and does not mention alprostadil or report any pharmacodynamic parameters for it. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not alprostadil. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for busulfan, not alprostadil. |
| PGx | Hurst_2015 | not_relevant | 0 | 0 | The paper investigates clopidogrel response and the role of CYP2C19 and PGE1 sensitivity; it does not report on the pharmacokinetics or pharmacodynamics of alprostadil itself. |
| PGx | Iseki_2017 | not_relevant | 0 | 0 | The paper focuses on liver regeneration using Muse cells and does not involve alprostadil or pharmacogenomics. |
| popPK | Ishii_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vecuronium and fentanyl, not alprostadil (though PGE1 is related, it is not the subject drug for PK parameters). |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper focuses on the design and evaluation of SARS-CoV-2 Papain-Like Protease inhibitors and does not involve alprostadil or pharmacokinetic modeling. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper focuses on SARS-CoV-2 PLpro inhibitors and does not mention alprostadil or report any pharmacodynamic data for it. |
| popPK | Johnson_1986 | irrelevant | 0 | 0 | The paper investigates the effect of phorbol esters on adenylate cyclase in S49 lymphoma cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | Johnson_1986 | not_relevant | 0 | 0 | The paper studies the effects of phorbol esters (PMA) on adenylate cyclase in S49 lymphoma cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Kabała-Dzik_2018 | not_relevant | 0 | 0 | The paper investigates the cytotoxic effects of flavonoids (apigenin, genistein, etc.) on breast cancer cells and does not mention or study alprostadil. |
| popPK | Kamei_1992 | irrelevant | 0 | 0 | The study investigates histamine-induced depolarization in guinea pig adipocytes and is unrelated to alprostadil pharmacokinetics. |
| PD | Kamei_1992 | not_relevant | 0 | 0 | The paper studies histamine-induced depolarization in guinea pig adipocytes and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Karabıyık_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro cytotoxicity of ruthenium complexes, with no mention of alprostadil or pharmacokinetic parameters. |
| PD | Karabıyık_2024 | not_relevant | 0 | 0 | The paper concerns ruthenium complexes and does not mention alprostadil or any pharmacodynamic modeling. |
| popPK | Kielbasa_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of galcanezumab, not alprostadil. |
| PD | Kielbasa_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) for galcanezumab, not alprostadil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kihara_1995 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| PD | Kihara_1995 | not_relevant | 0 | 0 | The paper focuses on the vasoreactivity of rat peripheral nerves to prostaglandins in general, not specifically on alprostadil pharmacodynamics or exposure-response relationships. |
| PD | Laka_2021 | not_relevant | 0 | 0 | The paper investigates plant extracts (Drimia calcarata) and does not mention alprostadil or report any pharmacodynamic parameters for it. |
| PGx | Lauritzen_2024 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on atorvastatin pharmacokinetics, not alprostadil. |
| popPK | Lepsch-Cunha_2024 | irrelevant | 0 | 0 | The paper is a bibliometric review of medicinal plants in the Amazon and contains no pharmacokinetic data for alprostadil. |
| PD | Lepsch-Cunha_2024 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of medicinal plants in the Amazon and does not contain any pharmacodynamic data or analysis for alprostadil. |
| PD | Liao_2008 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of ND700C, not alprostadil. |
| PD | Lindström_2001 | not_relevant | 0 | 0 | The paper studies ECL cell secretion regulation by various peptides and prostaglandins (PGE2, misoprostol) but does not mention or test alprostadil. |
| popPK | Livingstone_1994 | irrelevant | 0 | 0 | The paper describes in vitro cell signaling mechanisms using PGE1 (analog of alprostadil) as a stimulant, not pharmacokinetics of alprostadil. |
| PD | Livingstone_1994 | not_relevant | 0 | 0 | The paper studies insulin's effect on PGE1 (alprostadil) signaling in a cell line, not the pharmacodynamic response to alprostadil itself. |
| PD | Lydford_1994 | not_relevant | 0 | 0 | The paper characterizes the EP-receptor in rat trachea and does not report pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Maese_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant Erwinia asparaginase (JZP458) for acute lymphoblastic leukemia and does not involve alprostadil. |
| PD | Maese_2023 | not_relevant | 0 | 0 | The paper investigates JZP458 (asparaginase), not alprostadil, and reports PK/efficacy data for asparaginase activity rather than a PD model for alprostadil. |
| popPK | McArdle_1989 | irrelevant | 0 | 0 | The paper studies oxytocin and progesterone release from bovine corpus luteal cells and involves prostaglandins, but does not investigate alprostadil pharmacokinetics. |
| PD | McArdle_1989 | not_relevant | 0 | 0 | The paper studies the effects of IGF-I, insulin, and prostaglandins (PGF2 alpha, PGE2, PGE1) on bovine corpus luteal cells, but does not mention or test alprostadil. |
| popPK | McArdle_1990 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of prostaglandin regulation of hormone release in bovine cells, not a pharmacokinetic study of alprostadil. |
| PD | McArdle_1990 | not_relevant | 0 | 0 | The paper studies PGF2 alpha and insulin in bovine cells, not alprostadil. |
| popPK | McColl_2026 | irrelevant | 0 | 0 | The study models skeletal muscle protein synthesis and anabolic resistance, not the pharmacokinetics of alprostadil. |
| PD | McColl_2026 | not_relevant | 0 | 0 | The paper focuses on systems modeling of anabolic resistance in skeletal muscle and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | McIntyre_1977 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of bronchodilators on guinea-pig trachea, not a pharmacokinetic study of alprostadil. |
| popPK | McKinney_1986 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | McKinney_1986 | not_relevant | 0 | 0 | The paper investigates the pharmacology of caracemide, not alprostadil. |
| popPK | McKinney_1989 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | McKinney_1989 | not_relevant | 0 | 0 | The paper focuses on somatostatin receptors in neuroblastoma cells and does not mention alprostadil or report any pharmacodynamic parameters for it. |
| popPK | Meng_2006 | irrelevant | 0 | 0 | The study investigates the effects of bile acids on dermal fibroblast proliferation and does not involve alprostadil pharmacokinetics. |
| PD | Meng_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of bile acids (CDCA/UDCA) and PGE1, not alprostadil. |
| popPK | Moore_2000 | irrelevant | 0 | 0 | The paper describes an in vitro study of Brunner's gland secretion in guinea pigs using various agonists, but does not study the pharmacokinetics of alprostadil. |
| PD | Moore_2000 | not_relevant | 0 | 0 | The paper studies Brunner's gland secretion in guinea pigs using carbachol and other agents, but does not mention alprostadil or report any PD parameters for it. |
| popPK | Mtulo_2026 | irrelevant | 0 | 0 | The study is an in silico computational evaluation of statin analogs and does not involve alprostadil or report any pharmacokinetic parameters for it. |
| PD | Mtulo_2026 | not_relevant | 0 | 0 | The paper focuses on in silico computational evaluation (docking/MD) of statin analogs and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Mukhopadhyay_1998 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of G protein-coupled prostaglandin receptors on Na+ uptake in vesicles and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for alprostadil. |
| popPK | Murphy_1987 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PD | Murphy_1987 | not_relevant | 0 | 0 | The paper investigates the effects of fatty acids on opiate peptide inhibition of cAMP formation in neuroblastoma cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Muse_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tapentadol, not alprostadil. |
| PD | Muse_2019 | not_relevant | 0 | 0 | The paper investigates tapentadol, not alprostadil, and reports only qualitative pain improvement without numeric PD parameters. |
| PGx | Myint_2017 | not_relevant | 0 | 0 | The paper studies artemisinin-based combination therapies for malaria, not alprostadil. |
| PD | Mytych_2026 | not_relevant | 0 | 0 | The paper studies Indocyanine Green (ICG) photodynamic therapy, not alprostadil. |
| PD | Nagoshi_1998 | not_relevant | 0 | 0 | The paper investigates Prostaglandin D2 (PGD2), not alprostadil (PGE1), and explicitly states that PGE1 showed no inhibition. |
| popPK | Nakahata_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of PGJ2 and delta 12PGJ2 on cell growth in vitro, not the pharmacokinetics of alprostadil. |
| popPK | Nazabal_2023 | irrelevant | 0 | 0 | The study focuses on the electrophysiological effects of prostaglandins (PGE2, misoprostol) on rat locus coeruleus neurons and does not report pharmacokinetic parameters for alprostadil. |
| PD | Nazabal_2023 | not_relevant | 0 | 0 | The paper studies PGE2, sulprostone, and misoprostol, but does not report any pharmacodynamic data for alprostadil. |
| popPK | Neufeld_1992 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Neufeld_1992 | not_relevant | 0 | 0 | The paper focuses on in vitro cyst formation from renal cells and does not mention alprostadil or report any pharmacodynamic or exposure-response data. |
| PGx | Nishizuka_2018 | not_relevant | 0 | 0 | The paper focuses on cell therapy for liver regeneration and does not discuss the pharmacogenomics of alprostadil. |
| PD | Nkoana_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzofuran-hydrazone compounds, not alprostadil, and does not contain any pharmacodynamic modeling or exposure-response analysis for the target drug. |
| PGx | Nooney_2015 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of clopidogrel, not alprostadil. |
| PGx | Nüsing_2007 | not_relevant | 0 | 0 | The paper investigates the physiological effects of epoxyeicosatrienoic acids on renal ion transport in cell lines and does not mention alprostadil or pharmacogenomic interactions. |
| popPK | Ohia_1991 | irrelevant | 0 | 0 | The paper describes a pharmacological mechanism study on prostaglandin receptors in the eye, not the pharmacokinetics of alprostadil. |
| PD | Ohkubo_1998 | not_relevant | 0 | 0 | The paper studies the pharmacology of FSBA on cAMP formation in NG108-15 cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper describes an AI framework for drug-drug interaction prediction and does not report specific pharmacokinetic parameters for alprostadil. |
| PD | Ouassaf_2026 | not_relevant | 0 | 0 | The paper describes an AI-based classification framework for predicting drug-drug interactions and does not report any specific pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Padhi_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa (L-DOPA) produced by engineered bacteria, not alprostadil. |
| PD | Padhi_2025 | not_relevant | 0 | 0 | The paper focuses on L-DOPA delivery via engineered bacteria and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Padma-Nathan_2003 | not_relevant | 2 | 1 | The paper reports a clinical dose-response trend (p-values for dose comparisons) but does not provide numeric PD parameters (e.g., EC50, Emax) or concentration-effect data, as it is a clinical efficacy trial without PK/PD modeling. |
| popPK | Palmer_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on cAMP accumulation in smooth muscle cells, not a pharmacokinetic study reporting disposition parameters for alprostadil. |
| popPK | Pampuch_2006 | irrelevant | 0 | 0 | The study focuses on platelet aggregation assays for cangrelor and does not involve alprostadil pharmacokinetics. |
| PD | Pampuch_2006 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50, EC50) for cangrelor, not alprostadil. |
| popPK | Pereira_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on cervical smooth muscle contractility, not a pharmacokinetic study of alprostadil. |
| popPK | Petrucci_2011 | irrelevant | 0 | 0 | The study investigates in vitro platelet function and receptor signaling of PGE2 (not alprostadil) and does not report any pharmacokinetic parameters. |
| popPK | Plevin_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phosphoinositide turnover in chromaffin cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | Plevin_1990 | not_relevant | 0 | 0 | The paper studies prostaglandins (PGE1, PGE2, PGF2alpha) in chromaffin cells, not alprostadil, and does not report a PD relationship for the target drug. |
| popPK | Qian_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/pharmacological investigation of prostanoid receptors on human pulmonary artery tissue and does not report any pharmacokinetic parameters for alprostadil. |
| popPK | Quah_2020 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of Cornus officinalis ethanolic extract and does not involve alprostadil or any pharmacokinetic modeling. |
| PD | Quah_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Cornus officinalis extract, not alprostadil. |
| popPK | Regan_1994 | irrelevant | 0 | 0 | The paper describes the cloning and pharmacological characterization of an EP2 prostaglandin receptor and contains no pharmacokinetic data for alprostadil. |
| PD | Regan_1994 | not_relevant | 0 | 0 | The paper reports receptor cloning and binding/functional characteristics (EC50 for PGE2 and analogs) but does not report a pharmacodynamic or exposure-response relationship for alprostadil. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The study is a bioinformatics and molecular docking analysis of a traditional Chinese medicine for pulmonary fibrosis and does not investigate alprostadil or report any pharmacokinetic parameters. |
| PD | Ren_2026 | not_relevant | 0 | 0 | The paper focuses on bioinformatics, machine learning, and molecular docking for Jingfang Granule in IPF, with no mention of alprostadil or any pharmacodynamic/exposure-response analysis. |
| PD | Rohini_2019 | not_relevant | 0 | 0 | The paper is an in silico drug repurposing study using pharmacophore and docking methods; it does not report any experimental pharmacodynamic or exposure-response data for alprostadil. |
| PD | Rouhrazi_2018 | not_relevant | 0 | 0 | The paper investigates zoledronic acid, not alprostadil, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Schaefer_1998 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of PGE1 on human spermatozoa (receptor binding and calcium signaling) and does not report any pharmacokinetic parameters (CL, V, t1/2) for alprostadil. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The study characterizes the pharmacodynamic response of penile vessels to prostaglandin E1 but does not investigate the influence of gene variants, genotypes, or phenotypes on these effects. |
| popPK | Seiler_1994 | irrelevant | 0 | 0 | The paper studies a different drug (BMY 42393) and focuses on mechanism of action and platelet inhibition, not alprostadil pharmacokinetics. |
| PGx | Siller-Matula_2013 | not_relevant | 0 | 0 | The paper focuses on P2Y12 inhibitors (clopidogrel, prasugrel, ticagrelor) and does not mention alprostadil. |
| PGx | Simonsen_2002 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions (pharmacodynamic and pharmacokinetic) but does not report any pharmacogenomic effects (gene variants/genotypes) on alprostadil parameters. |
| PD | Siqueira_2021 | not_relevant | 0 | 0 | The paper studies trans-chalcone, not alprostadil. |
| popPK | Skrzynski_2026 | irrelevant | 0 | 0 | The study focuses on cannabis use metrics and biomarkers (THC/THC-COOH), not the pharmacokinetics of alprostadil. |
| PGx | Suzuki_2026 | not_relevant | 0 | 0 | The paper discusses AI-enhanced ECG for predicting atrial fibrillation and does not involve alprostadil or pharmacogenomics. |
| popPK | Talpain_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of PGE2 receptor subtypes and is not a pharmacokinetic study for alprostadil. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper discusses anifrolumab, not alprostadil. |
| PGx | Taub_1981 | not_relevant | 0 | 0 | The paper discusses cell growth requirements and cAMP metabolism, not the pharmacokinetics or pharmacodynamics of alprostadil in a pharmacogenomic context. |
| PGx | Taub_1984 | not_relevant | 0 | 0 | The paper studies cell line growth mechanisms and does not involve human pharmacogenomics or alprostadil PK/PD parameters. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper studies antimalarial HDAC inhibitors and does not involve the drug alprostadil or its pharmacokinetics. |
| PD | Tavares_2023 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro antimalarial activity of HDAC inhibitors, not on alprostadil or any pharmacodynamic modeling. |
| popPK | Tonduru_2022 | irrelevant | 0 | 0 | The paper focuses on structural modeling of OATP transporters and does not report pharmacokinetic parameters for alprostadil. |
| PD | Tonduru_2022 | not_relevant | 0 | 0 | The paper focuses on structural modeling and molecular dynamics simulations of Organic Anion Transporting Polypeptides (OATPs) and does not contain any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Umeki_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of superoxide production by NADPH oxidase and does not report pharmacodynamic or exposure-response relationships for alprostadil. |
| popPK | Vincent_1992 | irrelevant | 0 | 0 | The study investigates receptor desensitization and vascular compliance (pharmacodynamics) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Vingerhoets_2026 | irrelevant | 0 | 0 | The paper is a systematic review on postoperative corticosteroids for pain management after knee arthroplasty and contains no pharmacokinetic data for alprostadil. |
| PD | Vingerhoets_2026 | not_relevant | 0 | 0 | The paper is a systematic review of oral corticosteroids for pain management after knee arthroplasty and does not contain any pharmacodynamic or exposure-response analysis for alprostadil. |
| popPK | Volkova_2025 | irrelevant | 0 | 0 | The paper focuses on anifrolumab, sifalimumab, and other Type I IFN therapies for SLE, with no mention of alprostadil. |
| PD | Volkova_2025 | not_relevant | 0 | 0 | The paper focuses on Type I IFN therapies (anifrolumab, etc.) in SLE and does not mention alprostadil or report any PD parameters for it. |
| popPK | Wainman_1988 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper investigates the multi-omics mechanisms of Yixin Yangshen Granules in Alzheimer's disease and does not contain pharmacokinetic data for alprostadil. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Yixin Yangshen Granules in Alzheimer's disease and does not mention alprostadil or report any pharmacodynamic or exposure-response data. |
| PD | Watanabe_1991 | not_relevant | 3 | 2 | The paper reports receptor binding and functional ED50/IC50 values for analogues (iloprost, PGE1) on a cell line, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for the specific drug alprostadil. |
| PD | Widomski_1997 | not_relevant | 0 | 0 | The paper studies misoprostol and SC-46275, not alprostadil. |
| popPK | Wilson_1993 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Wilson_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (adenylate cyclase) in rabbit vascular tissues and does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for alprostadil. |
| PD | Wu_2005 | not_relevant | 0 | 0 | The paper investigates the interaction of mefloquine with ABC transporters (MRP1/MRP4) and does not mention alprostadil or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Yamamoto_1999 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of Prostaglandin E1 on calcium currents in rabbit cells and does not report pharmacokinetic parameters for alprostadil. |
| popPK | Yamauchi_2003 | relevant | 7 | 2 | The study models the pharmacokinetics of alprostadil (PGE1) in neonatal rats using a compartmental model, but the specific parameter values for rate constants are in Table 1 which is not included in the evidence, leaving only qualitative descriptions and one half-life value in the text. |
| popPK | Yu_1988 | irrelevant | 0 | 0 | The study investigates the mechanism of PGE1-stimulated cAMP accumulation in neuroblastoma cells and does not report any pharmacokinetic parameters for alprostadil. |
| PD | Zeng_1995 | not_relevant | 0 | 0 | The paper studies PGE2 receptor pharmacology in cell lines and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | van_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanism paper on calcium transport in rabbit kidneys, not a pharmacokinetic study of alprostadil. |
| PD | van_1996 | not_relevant | 0 | 0 | The paper investigates the effects of indomethacin and PGE2 on calcium transport, but does not report any pharmacodynamic or exposure-response data for alprostadil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
