<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;alprostadil&quot;}]"></div>

# alprostadil

- **generic name:** alprostadil
- **ATC codes:** `C01EA01`, `G04BE01`
- **DrugBank:** [DB00770](https://go.drugbank.com/drugs/DB00770) · **PubChem:** [CID 149351](https://pubchem.ncbi.nlm.nih.gov/compound/149351)
- **molar mass:** 354.487 g/mol (C20H34O5) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Alprostadil is a chemically-identical synthetic form of prostaglandin E1 (PGE1), a potent vasodilator produced endogenously. In 1996, the FDA approved the use of alprostadil, administered either with an intracavernosal injection or an intraurethral suppository, for the treatment of erectile dysfunction, and it is used in men for whom oral treatment is either contraindicated or ineffective. After administration, alprostadil promotes smooth muscle relaxation of the corpus cavernosal.[A257068,A257088] 

Alprostadil is also used in neonatal patients with congenital heart defects that depend on a patent ductus for survival until corrective or palliative surgery can be performed. This drug causes vasodilation by directly affecting vascular and ductus arteriosus (DA) smooth muscle, preventing or reversing the functional closure of the DA that occurs shortly after birth. This results in increased pulmonary or systemic blood flow in infants.[A34474,L45038,L45063]

**Indication.** Alprostadil is indicated for palliative, not definitive, therapy to temporarily maintain the patency of the ductus arteriosus until corrective or palliative surgery can be performed in neonates who have congenital heart defects and who depend upon the patent ductus for survival.[L45038] It is also indicated for the treatment of erectile dysfunction due to neurogenic, vasculogenic, psychogenic, or mixed etiology,[L45028,L45033] and as an adjunct to other diagnostic tests in the diagnosis of erectile dysfunction.[L45028]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:14 | 20:17 | 0/0/0 | 1/0/0 | 0/0/0 | 143,770/13,398 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 7/14 | 19/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.66). The first reading is what the record holds.">cross-check: disputed</span> | [Almquist_2026_UPCR24](drugs/drug_alprostadil/pd_Almquist_2026_UPCR24.md) | 24-hour urine protein-creatinine ratio ← anifrolumab · direct linear effect | — | Almquist J et al., Anifrolumab Dose Regimen Selection for…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70307](https://doi.org/10.1002/cpt.70307) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.66). The first reading is what the record holds.">cross-check: disputed</span> | [Almquist_2026_dropout](drugs/drug_alprostadil/pd_Almquist_2026_dropout.md) | investigational product discontinuation ← anifrolumab · direct linear effect | — | Almquist J et al., Anifrolumab Dose Regimen Selection for…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70307](https://doi.org/10.1002/cpt.70307) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alprostadil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | <sub>“…d and distributed throughout the entire body except for the central nervous system.[L45063…”</sub> | prose |
| metabolism | liver | <sub>“…ulating alprostadil may be metabolized in the lungs through first-pass pulmonary eliminati…”</sub> | prose |
| metabolism | lung | <sub>“…0% of the circulating alprostadil may be metabolized in the lungs through first-pass pulmo…”</sub> | prose |
| excretion | bile duct | <sub>“…% of alprostadil metabolites are excreted through urine and feces, respectively, over 72 h…”</sub> | prose |
| excretion | kidney | `ABCC4` substrate, `SLC22A6` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (inhibitor), HPGD (substrate), PTGDR2 (target), PTGER1 (target), PTGER2 (target), PTGER3 (target), PTGER4 (target), SLCO2A1 (substrate), SLCO3A1 (inhibitor), SLCO3A1 (substrate), TBXA2R (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 527 matched, 186 returned
- **screened:** 6  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_29 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
| `Lauritzen_2024.pdf` | Lauritzen T et al., The atorvastatin metabolite pattern in…, Atherosclerosis plus (2024) | pgx | 8 | [10.1016/j.athplu.2024.01.001](https://doi.org/10.1016/j.athplu.2024.01.001) | [38293288](https://www.ncbi.nlm.nih.gov/pubmed/38293288) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Funck-Brentano_2013.pdf` | Funck-Brentano C et al., Effects of rabeprazole on the antiplate…, Archives of cardiovascular… (2013) | pgx | 7 | [10.1016/j.acvd.2013.09.002](https://doi.org/10.1016/j.acvd.2013.09.002) | [24246616](https://www.ncbi.nlm.nih.gov/pubmed/24246616) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Nooney_2015.pdf` | Nooney VB et al., Post receptor determinants of acute pla…, Vascular pharmacology (2015) | pgx | 5 | [10.1016/j.vph.2014.11.003](https://doi.org/10.1016/j.vph.2014.11.003) | [25460367](https://www.ncbi.nlm.nih.gov/pubmed/25460367) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-30T05:09:40.137606+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adaikan_1984 | irrelevant | 0 | 0 | The paper is a pharmacological study comparing the effects of PGE1 (alprostadil), 6-oxo-PGE1, and PGI2 on muscle relaxation and platelet aggregation, containing no pharmacokinetic parameters. |
| PD | Adaikan_1984 | not_relevant | 3 | 2 | The paper reports qualitative comparisons and a single relative potency ratio (EC50 ratio) for 6-oxo-PGE1 vs PGI2, but does not provide absolute numeric PD parameters (EC50, Emax) or a concentration-effect curve for alprostadil (PGE1). |
| PD | Adam_1994 | not_relevant | 0 | 0 | The paper reports receptor cloning and ligand binding affinity (IC50) for the EP3 receptor, but does not report a pharmacodynamic exposure-response or dose-response relationship for alprostadil. |
| popPK | Aikawa_1990 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Allegaert_2013 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| PD | Allegaert_2013 | not_relevant | 0 | 0 | The paper focuses on paracetamol in neonates, not alprostadil. |
| popPK | Almquist_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Almquist_2022 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of anifrolumab, not alprostadil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Almquist_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for anifrolumab, not alprostadil. |
| popPK | Altura_1981 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on isolated canine vessels focusing on contractile responses to prostaglandins, not a pharmacokinetic study of alprostadil. |
| PD | Altura_1981 | not_relevant | 0 | 0 | The paper studies isolated canine intrapulmonary vessels and does not report pharmacodynamic or exposure-response data for alprostadil. |
| PD | Amann_2016 | not_relevant | 0 | 0 | The paper validates a platelet aggregation assay for P2Y12 inhibitors (clopidogrel/prasugrel) and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Ambrosioni_1993 | not_relevant | 1 | 0 | The text is a general review of prostanoid pharmacology and clinical trials, lacking any specific numeric PD parameters or exposure-response analysis for alprostadil. |
| popPK | Ammer_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor regulation in cell lines and does not report pharmacokinetic parameters for alprostadil. |
| PD | Ammer_1995 | not_relevant | 0 | 0 | The paper investigates the effect of chronic morphine exposure on PGE1 receptor binding and G-protein coupling in cell lines, not the pharmacodynamic or exposure-response relationship of alprostadil. |
| popPK | Angulo_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle relaxation and does not report pharmacokinetic parameters for alprostadil. |
| popPK | Angulo_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostanoid receptors in penile smooth muscle, reporting EC50 values for various agonists (including PGE1/alprostadil) but containing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Angulo_2002 | not_relevant | 0 | 0 | The paper reports in vitro pharmacology for various prostanoids (PGE1, PGI2, etc.) but does not report a PD or exposure-response relationship for alprostadil. |
| popPK | Angulo_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tissue contractility and receptor activity, not a pharmacokinetic study reporting disposition parameters for alprostadil. |
| PD | Angulo_2006 | not_relevant | 0 | 0 | The paper focuses on the mechanism of erectile dysfunction in diabetic patients involving thromboxane receptors and PKC, reporting EC50 values for U46619 (a TP agonist) and effects of inhibitors, but does not report a pharmacodynamic or exposure-response relationship for alprostadil. |
| popPK | Armstrong_1995 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of PGE2 and related agonists on neutrophil chemotaxis in vitro and does not report any pharmacokinetic parameters for alprostadil. |
| popPK | Ashby_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet receptors and does not report pharmacokinetic parameters for alprostadil. |
| PD | Atmaca_2020 | not_relevant | 0 | 0 | The paper studies benzimidazole derivatives, not alprostadil. |
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper describes a translational safety strategy for a TCR-like T cell bispecific antibody, not a pharmacokinetic study of alprostadil. |
| PD | Augustin_2026 | not_relevant | 0 | 0 | The paper discusses a TCR-like T cell bispecific antibody (MAGE-A4-TCB), not alprostadil, and focuses on nonclinical safety and dose selection rather than pharmacodynamic modeling of the specified drug. |
| popPK | Banerjee_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of prostaglandin E1 derivatives (M&B 28,767) and does not involve alprostadil or report pharmacokinetic parameters. |
| popPK | Bassiouni_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of corpus cavernosal relaxation and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for alprostadil. |
| popPK | Beckmann_2019 | irrelevant | 0 | 0 | The paper is about phytoplankton ecosystem modeling and does not involve alprostadil or pharmacokinetics. |
| popPK | Bek_1999 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Bek_1999 | not_relevant | 0 | 0 | The paper focuses on the characterization of prostanoid receptors in podocytes and does not report pharmacodynamic or exposure-response relationships for alprostadil. |
| PD | Bentur_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of RUC-4, not alprostadil. |
| PD | Bitgen_2026 | not_relevant | 0 | 0 | The paper investigates the effects of Thymus vulgaris extract and docetaxel, not alprostadil. |
| popPK | Boulay_2024 | irrelevant | 0 | 0 | The paper studies HIV-1 capsid inhibitors (H27) and does not involve alprostadil or its pharmacokinetics. |
| PD | Boulay_2024 | not_relevant | 0 | 0 | The paper studies the compound H27, not alprostadil, and reports no pharmacodynamic data for alprostadil. |
| popPK | Boyadjieva_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ethanol and PGE1 effects on beta-endorphin release in hypothalamic cells, containing no pharmacokinetic parameters for alprostadil. |
| popPK | Brugger_2008 | irrelevant | 0 | 0 | The study is a pharmacological characterization of receptor agonists and does not report pharmacokinetic parameters for alprostadil. |
| PGx | Brunton_1977 | not_relevant | 0 | 0 | The paper studies PGE1 (prostaglandin E1) receptor binding and adenylate cyclase activity in cell lines, not the pharmacokinetics or pharmacodynamics of alprostadil (PGE1) in humans or the effect of specific gene variants on drug response. |
| popPK | Burchert_1997 | irrelevant | 0 | 0 | The study uses prostaglandin E1 (alprostadil) as a vasodilator to assess blood flow via PET, rather than measuring the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not alprostadil, which is only listed as a co-administered medication. |
| PD | Cao_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tacrolimus, not alprostadil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper studies RTA-408 (omaveloxolone), not alprostadil. |
| popPK | Chia_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Chia_2021 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for anifrolumab, not alprostadil. |
| popPK | Chia_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Chia_2022 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of anifrolumab, not alprostadil. |
| popPK | Chia_2022_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Chia_2022_2 | not_relevant | 0 | 0 | The paper analyzes anifrolumab, not alprostadil. |
| PD | Cohan_1996 | not_relevant | 0 | 0 | The paper reports in vitro pharmacology for CP-80633, not alprostadil. |
| PD | Crankshaw_1994 | not_relevant | 0 | 0 | The paper reports concentration-effect data for various prostanoids (PGE2, PGF2 alpha, etc.) and COX inhibitors, but does not report any pharmacodynamic data or parameters for alprostadil. |
| popPK | Crider_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of prostaglandin receptors and does not report pharmacokinetic parameters for alprostadil. |
| PD | Crider_1998 | not_relevant | 0 | 0 | The paper reports pharmacological data for PGE2 and other prostaglandins, but does not mention or provide data for alprostadil. |
| popPK | Crider_2001 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing prostanoid receptors in cell lines and does not report any pharmacokinetic parameters for alprostadil. |
| PD | Cuzin_2016 | not_relevant | 1 | 0 | The text is a qualitative review/summary that mentions efficacy percentages and doses but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve. |
| popPK | DeForrest_1989 | irrelevant | 0 | 0 | The paper studies zofenopril (an ACE inhibitor) and does not report pharmacokinetic parameters for alprostadil. |
| PD | DeForrest_1989 | not_relevant | 0 | 0 | The paper discusses zofenopril, not alprostadil. |
| popPK | Desai_2026 | irrelevant | 0 | 0 | The paper is a mechanistic oncology study regarding cancer resistance and does not involve alprostadil or pharmacokinetic parameters. |
| PD | Desai_2026 | not_relevant | 0 | 0 | The paper focuses on stromal mechanisms of resistance to ALK inhibitors (e.g., alectinib) and does not mention alprostadil or report any pharmacodynamic exposure-response relationships for it. |
| popPK | Du_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not alprostadil. |
| PD | Du_2022 | not_relevant | 0 | 0 | The paper focuses on busulfan, not alprostadil, and reports PK parameters and clinical outcome correlations (AUC vs EFS) rather than a pharmacodynamic exposure-response model with numeric PD parameters like Emax or EC50. |
| PD | Filippi_2000 | not_relevant | 0 | 0 | The paper focuses on the functional characterization of adenosine receptors in human corpora cavernosa and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Flores_1975 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on toad bladder water flow and cyclic AMP, not a pharmacokinetic study of alprostadil. |
| PGx | Funck-Brentano_2013 | not_relevant | 0 | 0 | The paper studies the interaction between rabeprazole and clopidogrel, not alprostadil. |
| popPK | Galant_1984 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on beta-adrenergic receptor desensitization in neutrophils and does not report pharmacokinetic parameters for alprostadil. |
| PD | Galant_1984 | not_relevant | 0 | 0 | The paper studies beta-adrenergic desensitization using isoproterenol and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper is a clinical study on pneumonia and mortality outcomes, containing no pharmacokinetic data or parameters for alprostadil. |
| PD | Gao_2023 | not_relevant | 0 | 0 | The paper is a clinical cohort study on pneumonia outcomes and machine learning clustering; it does not report any pharmacokinetic or pharmacodynamic data for alprostadil. |
| PD | Garrido-Abad_2022 | not_relevant | 1 | 0 | The paper is a clinical efficacy study comparing treatment groups using subjective scores (IIEF-5, SEP) and does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Garrity_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and enzyme activity, not a pharmacokinetic study reporting disposition parameters for alprostadil. |
| popPK | Gespach_1982 | irrelevant | 0 | 0 | The paper studies histamine and prostaglandin receptors in cell lines and does not report pharmacokinetic parameters for alprostadil. |
| PD | Gespach_1982 | not_relevant | 0 | 0 | The paper studies histamine and PGE1 receptor pharmacology in HL-60 cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Gespach_1985 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell differentiation and receptor activity, not a pharmacokinetic study of alprostadil. |
| PD | Gespach_1985 | not_relevant | 0 | 0 | The paper discusses PGE1 (alprostadil) in the context of cell differentiation and cAMP generation, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve for alprostadil in a clinical or physiological context; it only lists an EC50 value for a receptor assay in a cell line, which is a pharmacological potency parameter, not a PD model parameter in the context of drug exposure. |
| popPK | Ghazi_2026 | irrelevant | 0 | 0 | The paper is a protocol for a sleep study in older adults and contains no pharmacokinetic data or parameters for alprostadil. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on BATF2 and STING signaling in cancer, with no mention of alprostadil or pharmacokinetic parameters. |
| PD | Gong_2025 | not_relevant | 0 | 0 | The paper investigates the role of BATF2 in tumor immunity and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Gu_2005 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (blood pressure effects) and formulation stability rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for alprostadil. |
| popPK | Gu_2007 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (Tmax, Emax, AUC) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for alprostadil. |
| popPK | Gudat_1981 | irrelevant | 0 | 0 | The paper studies platelet shape changes induced by peptides and NGF, not the pharmacokinetics of alprostadil. |
| PD | Gudat_1981 | not_relevant | 0 | 0 | The paper studies platelet shape changes induced by peptides (NGF, SP) and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Gupta_1998 | not_relevant | 0 | 0 | The paper investigates alpha2-adrenoceptor pharmacology in corpus cavernosum smooth muscle using UK 14,304 and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Hamasaki_1983 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of VIP's relaxant action on cat pulmonary artery, not a pharmacokinetic study of alprostadil. |
| PD | Hellstrom_1994 | not_relevant | 0 | 0 | The paper investigates nitric oxide donors (s-nitrocysteine, sodium nitroprusside) and acetylcholine, not alprostadil. |
| popPK | Henry_1987 | irrelevant | 0 | 0 | The paper studies a plant-derived fatty acid (9-HODE) and its effect on platelet adenylate cyclase, not the pharmacokinetics of alprostadil. |
| PD | Henry_1987 | not_relevant | 0 | 0 | The paper studies a plant-derived fatty acid (9-HODE), not alprostadil. |
| PD | Hirose_2000 | not_relevant | 0 | 0 | The paper studies NSP-513 and cilostazol, not alprostadil; alprostadil is only mentioned as PGE1 in an in vitro context without a PD model for the target drug. |
| PD | Hollande_1993 | not_relevant | 0 | 0 | The paper studies histamine release from isolated cells and does not report a pharmacodynamic or exposure-response relationship for alprostadil. |
| popPK | Holt_2019 | irrelevant | 0 | 0 | The paper is a structural biology study on EP4 receptor homology modeling and docking, not a pharmacokinetic study, and does not report disposition parameters for alprostadil. |
| PD | Holt_2019 | not_relevant | 2 | 2 | The paper focuses on homology modeling and docking of the EP4 receptor; while it lists EC50 values for various agonists (including PGE1/alprostadil) to validate the model, it does not report a pharmacokinetic or exposure-response analysis for alprostadil. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | The paper focuses on a PROTAC compound (SJ11646) for T-ALL and does not study alprostadil or report its pharmacokinetic parameters. |
| PD | Hu_2022 | not_relevant | 0 | 0 | The paper discusses a PROTAC compound (SJ11646) for T-ALL and does not mention alprostadil or report any pharmacodynamic parameters for it. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not alprostadil, which is only mentioned as a prophylactic agent. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for busulfan, not alprostadil. |
| PGx | Hurst_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of clopidogrel, not alprostadil. |
| PGx | Iseki_2017 | not_relevant | 0 | 0 | The paper investigates liver regeneration using Muse stem cells and does not mention alprostadil or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Ishii_1991 | irrelevant | 0 | 0 | The study investigates the effect of alprostadil (PGE1) on the pharmacokinetics of vecuronium and fentanyl, not the pharmacokinetic parameters of alprostadil itself. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper focuses on SARS-CoV-2 protease inhibitors and does not involve alprostadil or pharmacokinetic parameters. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper focuses on SARS-CoV-2 PLpro inhibitors and does not mention alprostadil or report any pharmacodynamic data for it. |
| popPK | Johnson_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on adenylate cyclase in lymphoma cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | Johnson_1986 | not_relevant | 0 | 0 | The paper studies the effects of phorbol esters (PMA) on adenylate cyclase in S49 lymphoma cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Kabała-Dzik_2018 | not_relevant | 0 | 0 | The paper investigates the cytotoxic effects of flavonoids (apigenin, genistein, etc.) on breast cancer cells and does not mention or study alprostadil. |
| popPK | Kamei_1992 | irrelevant | 0 | 0 | The paper studies histamine-induced depolarization in guinea pig adipocytes and does not report pharmacokinetic parameters for alprostadil. |
| PD | Kamei_1992 | not_relevant | 0 | 0 | The paper studies histamine-induced depolarization in guinea pig adipocytes and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Karabıyık_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxicity of ruthenium complexes, not the pharmacokinetics of alprostadil. |
| PD | Karabıyık_2024 | not_relevant | 0 | 0 | The paper concerns ruthenium complexes and does not mention alprostadil or any pharmacodynamic modeling. |
| popPK | Kielbasa_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for galcanezumab, not alprostadil. |
| PD | Kielbasa_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) for galcanezumab, not alprostadil, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kihara_1995 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| PD | Kihara_1995 | not_relevant | 0 | 0 | The paper focuses on the vasoreactivity of rat peripheral nerves to prostaglandins in general, not specifically on alprostadil pharmacodynamics or exposure-response relationships. |
| PD | Laka_2021 | not_relevant | 0 | 0 | The paper investigates plant extracts (Drimia calcarata) and does not mention alprostadil or report any pharmacodynamic parameters for it. |
| PGx | Lauritzen_2024 | not_relevant | 0 | 0 | The paper investigates atorvastatin pharmacogenomics, not alprostadil. |
| popPK | Lepsch-Cunha_2024 | irrelevant | 0 | 0 | The paper is a bibliometric review of medicinal plants in the Amazon and does not contain any pharmacokinetic data or parameters for alprostadil. |
| PD | Lepsch-Cunha_2024 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of medicinal plants in the Amazon and does not contain any pharmacodynamic data or analysis for alprostadil. |
| PD | Liao_2008 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of ND700C, not alprostadil. |
| PD | Lindström_2001 | not_relevant | 0 | 0 | The paper studies ECL cell secretion regulation by various peptides and prostaglandins (PGE2, misoprostol) but does not mention or test alprostadil. |
| popPK | Livingstone_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on adenylate cyclase signaling in cell lines and does not report pharmacokinetic parameters for alprostadil. |
| PD | Livingstone_1994 | not_relevant | 0 | 0 | The paper studies insulin's effect on PGE1 (alprostadil) signaling in a cell line, not the pharmacodynamic response to alprostadil itself. |
| PD | Lydford_1994 | not_relevant | 0 | 0 | The paper characterizes the EP-receptor in rat trachea and does not report pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Maese_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of recombinant Erwinia asparaginase (JZP458), not alprostadil. |
| PD | Maese_2023 | not_relevant | 0 | 0 | The paper investigates JZP458 (asparaginase), not alprostadil, and reports PK/efficacy data for asparaginase activity rather than a PD model for alprostadil. |
| popPK | McArdle_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bovine corpus luteal cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | McArdle_1989 | not_relevant | 0 | 0 | The paper studies the effects of IGF-I, insulin, and prostaglandins (PGF2 alpha, PGE2, PGE1) on bovine corpus luteal cells, but does not mention or test alprostadil. |
| popPK | McArdle_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bovine ovarian cells focusing on hormone regulation by prostaglandins, not a pharmacokinetic study of alprostadil. |
| PD | McArdle_1990 | not_relevant | 0 | 0 | The paper studies PGF2 alpha and insulin in bovine cells, not alprostadil. |
| popPK | McColl_2026 | irrelevant | 0 | 0 | The paper is a systems modelling study on anabolic resistance in skeletal muscle and does not involve alprostadil or report any pharmacokinetic parameters for it. |
| PD | McColl_2026 | not_relevant | 0 | 0 | The paper focuses on systems modeling of anabolic resistance in skeletal muscle and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | McIntyre_1977 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bronchodilator effects on guinea-pig trachea and does not report any pharmacokinetic parameters for alprostadil. |
| popPK | McKinney_1986 | irrelevant | 0 | 0 | The study investigates the neurochemical effects of caracemide in murine cells and does not involve alprostadil pharmacokinetics. |
| PD | McKinney_1986 | not_relevant | 0 | 0 | The paper investigates the pharmacology of caracemide, not alprostadil. |
| popPK | McKinney_1989 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | McKinney_1989 | not_relevant | 0 | 0 | The paper focuses on somatostatin receptors in neuroblastoma cells and does not mention alprostadil or report any pharmacodynamic parameters for it. |
| popPK | Meng_2006 | irrelevant | 0 | 0 | The paper investigates the effects of bile acids on dermal fibroblast proliferation and cAMP production, and does not involve alprostadil or pharmacokinetic parameters. |
| PD | Meng_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of bile acids (CDCA/UDCA) and PGE1, not alprostadil. |
| popPK | Moore_2000 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of Brunner's gland secretion in guinea pigs and does not report pharmacokinetic parameters for alprostadil. |
| PD | Moore_2000 | not_relevant | 0 | 0 | The paper studies Brunner's gland secretion in guinea pigs using carbachol and other agents, but does not mention alprostadil or report any PD parameters for it. |
| popPK | Mtulo_2026 | irrelevant | 0 | 0 | The study focuses on computational evaluation of statin analogs, not alprostadil pharmacokinetics. |
| PD | Mtulo_2026 | not_relevant | 0 | 0 | The paper focuses on in silico computational evaluation (docking/MD) of statin analogs and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Mukhopadhyay_1998 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of G protein-coupled prostaglandin receptors on Na+ uptake in vesicles and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for alprostadil. |
| popPK | Murphy_1987 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PD | Murphy_1987 | not_relevant | 0 | 0 | The paper investigates the effects of fatty acids on opiate peptide inhibition of cAMP formation in neuroblastoma cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Muse_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tapentadol, not alprostadil. |
| PD | Muse_2019 | not_relevant | 0 | 0 | The paper investigates tapentadol, not alprostadil, and reports only qualitative pain improvement without numeric PD parameters. |
| PGx | Myint_2017 | not_relevant | 0 | 0 | The paper studies artemisinin-based combination therapies for malaria and does not mention alprostadil. |
| PD | Mytych_2026 | not_relevant | 0 | 0 | The paper studies Indocyanine Green (ICG) photodynamic therapy, not alprostadil. |
| PD | Nagoshi_1998 | not_relevant | 0 | 0 | The paper investigates Prostaglandin D2 (PGD2), not alprostadil (PGE1), and explicitly states that PGE1 showed no inhibition. |
| popPK | Nakahata_1990 | irrelevant | 0 | 0 | The paper studies the cellular effects of PGJ2 and delta 12PGJ2 on astrocytoma cells and does not involve alprostadil or pharmacokinetic parameters. |
| popPK | Nazabal_2023 | irrelevant | 0 | 0 | The paper is an ex vivo electrophysiological study of EP3 receptors in rat brain slices and does not report pharmacokinetic parameters for alprostadil. |
| PD | Nazabal_2023 | not_relevant | 0 | 0 | The paper studies PGE2, sulprostone, and misoprostol, but does not report any pharmacodynamic data for alprostadil. |
| popPK | Neufeld_1992 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Neufeld_1992 | not_relevant | 0 | 0 | The paper focuses on in vitro cyst formation from renal cells and does not mention alprostadil or report any pharmacodynamic or exposure-response data. |
| PGx | Nishizuka_2018 | not_relevant | 0 | 0 | The paper discusses liver regeneration and cell therapy using Muse cells, with no mention of alprostadil or pharmacogenomics. |
| PD | Nkoana_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzofuran-hydrazone compounds, not alprostadil, and does not contain any pharmacodynamic modeling or exposure-response analysis for the target drug. |
| PGx | Nooney_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of clopidogrel, not alprostadil. |
| PGx | Nüsing_2007 | not_relevant | 0 | 0 | The paper investigates the physiological effects of epoxyeicosatrienoic acids (EETs) on renal ion transport and does not involve alprostadil or pharmacogenomic variants. |
| popPK | Ohia_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostaglandin receptors in human iris-ciliary body tissue and does not report any pharmacokinetic parameters for alprostadil. |
| PD | Ohkubo_1998 | not_relevant | 0 | 0 | The paper studies the pharmacology of FSBA on cAMP formation in NG108-15 cells and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper describes an AI platform for drug-drug interaction prediction and does not report any pharmacokinetic parameters for alprostadil. |
| PD | Ouassaf_2026 | not_relevant | 0 | 0 | The paper describes an AI-based classification framework for predicting drug-drug interactions and does not report any specific pharmacodynamic or exposure-response data for alprostadil. |
| popPK | Padhi_2025 | irrelevant | 0 | 0 | The study focuses on levodopa (L-DOPA) and a bioengineered bacterium, not alprostadil. |
| PD | Padhi_2025 | not_relevant | 0 | 0 | The paper focuses on L-DOPA delivery via engineered bacteria and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Padma-Nathan_2003 | not_relevant | 2 | 1 | The paper reports a clinical dose-response trend (p-values for dose comparisons) but does not provide numeric PD parameters (e.g., EC50, Emax) or concentration-effect data, as it is a clinical efficacy trial without PK/PD modeling. |
| popPK | Palmer_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cAMP accumulation in cultured cells and does not report pharmacokinetic parameters for alprostadil. |
| popPK | Pampuch_2006 | irrelevant | 0 | 0 | The study focuses on platelet function assays (VASP-phosphorylation and aggregometry) for cangrelor and ADP, not the pharmacokinetics of alprostadil. |
| PD | Pampuch_2006 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50, EC50) for cangrelor, not alprostadil. |
| popPK | Pereira_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cervical smooth muscle contractility, not a pharmacokinetic study, and does not report any disposition parameters for alprostadil. |
| popPK | Petrucci_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PGE2 on platelet function and does not involve alprostadil or report pharmacokinetic parameters. |
| popPK | Plevin_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chromaffin cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | Plevin_1990 | not_relevant | 0 | 0 | The paper studies prostaglandins (PGE1, PGE2, PGF2alpha) in chromaffin cells, not alprostadil, and does not report a PD relationship for the target drug. |
| popPK | Qian_1994 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on receptor agonism in isolated tissue and does not report pharmacokinetic parameters for alprostadil. |
| popPK | Quah_2020 | irrelevant | 0 | 0 | The paper investigates the anti-allergic and anti-inflammatory properties of Cornus officinalis extract and does not involve alprostadil or pharmacokinetic parameters. |
| PD | Quah_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Cornus officinalis extract, not alprostadil. |
| popPK | Regan_1994 | irrelevant | 0 | 0 | The paper is a molecular biology study on the cloning of a prostaglandin receptor and does not report pharmacokinetic parameters for alprostadil. |
| PD | Regan_1994 | not_relevant | 0 | 0 | The paper reports receptor cloning and binding/functional characteristics (EC50 for PGE2 and analogs) but does not report a pharmacodynamic or exposure-response relationship for alprostadil. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics and molecular docking study on Jingfang Granule for pulmonary fibrosis and does not involve alprostadil or pharmacokinetic parameters. |
| PD | Ren_2026 | not_relevant | 0 | 0 | The paper focuses on bioinformatics, machine learning, and molecular docking for Jingfang Granule in IPF, with no mention of alprostadil or any pharmacodynamic/exposure-response analysis. |
| PD | Rohini_2019 | not_relevant | 0 | 0 | The paper is an in silico drug repurposing study using pharmacophore and docking methods; it does not report any experimental pharmacodynamic or exposure-response data for alprostadil. |
| PD | Rouhrazi_2018 | not_relevant | 0 | 0 | The paper investigates zoledronic acid, not alprostadil, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Schaefer_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on sperm physiology and receptor binding, not a pharmacokinetic study of alprostadil. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of dilator drugs on human penile vessels in vitro but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Seiler_1994 | irrelevant | 0 | 0 | The paper studies BMY 42393, a prostacyclin partial agonist, and does not report pharmacokinetic parameters for alprostadil. |
| PGx | Siller-Matula_2013 | not_relevant | 0 | 0 | The paper discusses P2Y12 inhibitors (clopidogrel, prasugrel, ticagrelor) and does not mention alprostadil. |
| PGx | Simonsen_2002 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and cardiovascular effects of ED treatments, not a pharmacogenomic study. |
| PD | Siqueira_2021 | not_relevant | 0 | 0 | The paper studies trans-chalcone, not alprostadil. |
| popPK | Skrzynski_2026 | irrelevant | 0 | 0 | The paper focuses on cannabis use metrics and THC biomarkers, with no mention of alprostadil or its pharmacokinetic parameters. |
| PGx | Suzuki_2026 | not_relevant | 0 | 0 | The paper focuses on AI-enhanced ECG for predicting atrial fibrillation and does not mention alprostadil or pharmacogenomics. |
| popPK | Talpain_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of PGE2 receptor subtypes in neutrophils and does not report pharmacokinetic parameters for alprostadil. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of anifrolumab, not alprostadil. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper discusses anifrolumab, not alprostadil. |
| PGx | Taub_1981 | not_relevant | 0 | 0 | The paper investigates cell growth requirements and malignant transformation in kidney epithelial cells, not the pharmacokinetics or pharmacodynamics of alprostadil in humans or relevant pharmacogenomic contexts. |
| PGx | Taub_1984 | not_relevant | 0 | 0 | The paper studies cell growth mechanisms in MDCK cells and does not involve alprostadil or human pharmacogenomics. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper studies HDAC inhibitors for malaria and does not involve alprostadil. |
| PD | Tavares_2023 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro antimalarial activity of HDAC inhibitors, not on alprostadil or any pharmacodynamic modeling. |
| popPK | Tonduru_2022 | irrelevant | 0 | 0 | The paper focuses on structural modeling of OATP transporters and does not report pharmacokinetic parameters for alprostadil. |
| PD | Tonduru_2022 | not_relevant | 0 | 0 | The paper focuses on structural modeling and molecular dynamics simulations of Organic Anion Transporting Polypeptides (OATPs) and does not contain any pharmacodynamic or exposure-response data for alprostadil. |
| PD | Umeki_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of superoxide production by NADPH oxidase and does not report pharmacodynamic or exposure-response relationships for alprostadil. |
| popPK | Vincent_1992 | irrelevant | 0 | 0 | The study investigates receptor desensitization and pharmacodynamics (vasodilation) rather than pharmacokinetic disposition parameters. |
| popPK | Vingerhoets_2026 | irrelevant | 0 | 0 | The paper is a systematic review of postoperative oral corticosteroids for pain management after total knee arthroplasty and does not study alprostadil or report pharmacokinetic parameters. |
| PD | Vingerhoets_2026 | not_relevant | 0 | 0 | The paper is a systematic review of oral corticosteroids for pain management after knee arthroplasty and does not contain any pharmacodynamic or exposure-response analysis for alprostadil. |
| popPK | Volkova_2025 | irrelevant | 0 | 0 | The paper focuses on a mechanistic model of Type 1 IFN-mediated inflammation in SLE and does not involve alprostadil or report its pharmacokinetic parameters. |
| PD | Volkova_2025 | not_relevant | 0 | 0 | The paper focuses on Type I IFN therapies (anifrolumab, etc.) in SLE and does not mention alprostadil or report any PD parameters for it. |
| popPK | Wainman_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostanoid effects on rat myometrium, not a pharmacokinetic study of alprostadil. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of Yixin Yangshen Granules in Alzheimer's disease and does not involve alprostadil or pharmacokinetic parameters. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Yixin Yangshen Granules in Alzheimer's disease and does not mention alprostadil or report any pharmacodynamic or exposure-response data. |
| PD | Watanabe_1991 | not_relevant | 3 | 2 | The paper reports receptor binding and functional ED50/IC50 values for analogues (iloprost, PGE1) on a cell line, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for the specific drug alprostadil. |
| PD | Widomski_1997 | not_relevant | 0 | 0 | The paper studies misoprostol and SC-46275, not alprostadil. |
| popPK | Wilson_1993 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Wilson_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (adenylate cyclase) in rabbit vascular tissues and does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for alprostadil. |
| PD | Wu_2005 | not_relevant | 0 | 0 | The paper investigates the interaction of mefloquine with ABC transporters (MRP1/MRP4) and does not mention alprostadil or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Yamamoto_1999 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of Prostaglandin E1 (PGE1) on calcium currents in rabbit atrial cells, not the pharmacokinetics of alprostadil. |
| popPK | Yamauchi_2003 | irrelevant | 2 | 1 | The study focuses on pharmacological response kinetics (PRK) of lipo-PGE1 (prostaglandin E1) in rats, not alprostadil (PGE1), and does not report standard quantitative PK parameters like clearance or volume for the subject drug. |
| popPK | Yu_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell differentiation and cAMP signaling, not a pharmacokinetic study of alprostadil. |
| PD | Zeng_1995 | not_relevant | 0 | 0 | The paper studies PGE2 receptor pharmacology in cell lines and does not report any pharmacodynamic or exposure-response data for alprostadil. |
| popPK | van_1996 | irrelevant | 0 | 0 | The study investigates the physiological effects of prostanoids on calcium transport in rabbit kidney cells and does not report pharmacokinetic parameters for alprostadil. |
| PD | van_1996 | not_relevant | 0 | 0 | The paper investigates the effects of indomethacin and PGE2 on calcium transport, but does not report any pharmacodynamic or exposure-response data for alprostadil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
