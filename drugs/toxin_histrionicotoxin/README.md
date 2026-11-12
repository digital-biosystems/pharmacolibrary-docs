<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Histrionicotoxin&quot;}]"></div>

# Histrionicotoxin

- **generic name:** Histrionicotoxin
- **T3DB:** [T3D2528](http://www.t3db.ca/toxins/T3D2528) · **PubChem:** [CID 6437364](https://pubchem.ncbi.nlm.nih.gov/compound/6437364)

## About

Histrionicotoxin is a toxin found in poison dart frogs (genus Dendrobates). It is a potent non-competitive antagonist of nicotinic acetylcholine receptors.

- **Category:** Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite), inhalation (smoking)
- **Sources and uses:** Histrionicotoxin is a toxin found in poison dart frogs (genus Dendrobates).
- **Mechanism of toxicity:** Histrionicotoxin is a potent non-competitive antagonist of nicotinic acetylcholine receptors.
- **Health effects:** Histrionicotoxin is neurotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2528">T3DB T3D2528</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 34272-51-0</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Rapier_1987_dopamine_release](drugs/toxin_histrionicotoxin/pd_Rapier_1987_dopamine_release.md) | nicotine-evoked striatal dopamine release ← perhydrohistrionicotoxin · direct Emax (saturable) effect | — | Rapier C et al., The neurotoxin histrionicotoxin interac…, FEBS letters (1987) | [10.1016/0014-5793(87)81363-7](https://doi.org/10.1016/0014-5793(87)81363-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 13:12 | 18:37 | 0/0/0 | 0/1/0 | 0/0/0 | 463,467/11,944 | einfracz / qwen3.8-27b | 18 | 2/16 | 18/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 69 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lesche_2014.pdf` | Lesche D et al., CYP3A5*3 and POR*28 genetic variants in…, Therapeutic drug monitoring (2014) | pgx | 8 | [10.1097/FTD.0000000000000080](https://doi.org/10.1097/FTD.0000000000000080) | [24739669](https://www.ncbi.nlm.nih.gov/pubmed/24739669) | metadata signals extractable PGX data (CYP3A5*3, PK/PD-context) |
| `Lesche_2015.pdf` | Lesche D et al., Influence of CYP3A5 genetic variation o…, Clinical transplantation (2015) | pgx | 8 | [10.1111/ctr.12653](https://doi.org/10.1111/ctr.12653) | [26458301](https://www.ncbi.nlm.nih.gov/pubmed/26458301) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Liu_2024.pdf` | Liu L et al., Effects of WuZhi preparations on tacrol…, Clinical transplantation (2024) | pgx | 8 | [10.1111/ctr.15237](https://doi.org/10.1111/ctr.15237) | [38289887](https://www.ncbi.nlm.nih.gov/pubmed/38289887) | metadata signals extractable PGX data (CYP3A5*1, PK/PD-context) |
| `Liang_2013.pdf` | Liang JJ et al., TPMT genetic variants are associated wi…, Pharmacogenetics and genomi… (2013) | pgx | 5 | [10.1097/FPC.0000000000000005](https://doi.org/10.1097/FPC.0000000000000005) | [24121523](https://www.ncbi.nlm.nih.gov/pubmed/24121523) | metadata signals extractable PGX data (TPMT) |
| `Liu_2022.pdf` | Liu L et al., CYP3A4/5 genotypes and age codetermine…, International immunopharmac… (2022) | pgx | 5 | [10.1016/j.intimp.2022.109164](https://doi.org/10.1016/j.intimp.2022.109164) | [35998509](https://www.ncbi.nlm.nih.gov/pubmed/35998509) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-11-10 13:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auzenne_1995 | irrelevant | 0 | 0 | The paper studies cytotoxic effects of TNF, IFN-gamma, melphalan, and hyperthermia, and does not involve histrionicotoxin or any kinetic parameters. |
| popPK | Barten_2005 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics and pharmacodynamics of immunosuppressive drugs (cyclosporine, tacrolimus, mycophenolic acid) in transplant recipients and does not mention histrionicotoxin. |
| popPK | Barten_2007 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic monitoring of immunosuppressive therapy in heart transplant patients and does not mention or provide kinetic data for histrionicotoxin. |
| popPK | Bartfay_2022 | irrelevant | 0 | 0 | The paper reports renal function (GFR) in heart failure patients and does not mention or provide toxicokinetic parameters for histrionicotoxin. |
| popPK | Baryalei_2003 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics and renal function of immunosuppressants (cyclosporine, mycophenolate mofetil) in heart transplant recipients and contains no data for histrionicotoxin. |
| popPK | Bernheim_2004 | irrelevant | 0 | 0 | The paper investigates the pharmacological response to atropine in heart transplant patients and does not mention histrionicotoxin or provide any kinetic parameters for it. |
| popPK | Cantarovich_2001 | irrelevant | 0 | 0 | no_text gate: only 203 chars of text extracted (&lt; 400) |
| popPK | Cantarovich_2002 | irrelevant | 0 | 0 | The paper studies creatinine clearance and GFR in heart transplant patients and does not mention or measure histrionicotoxin. |
| popPK | Chaniad_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 1-hydroxy-5,6,7-trimethoxyxanthone (HTX), not histrionicotoxin (which is also abbreviated HTX but is a peptide toxin). |
| popPK | Fiocchi_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for everolimus and cyclosporine in a transplant patient and neonate, with no mention of histrionicotoxin. |
| popPK | Gašparović_2018 | irrelevant | 0 | 0 | The paper is a clinical study on infection outcomes in heart transplant patients and contains no data or parameters for histrionicotoxin. |
| popPK | Gleissner_2004 | irrelevant | 0 | 0 | The paper discusses hemoglobin levels and survival in heart transplant patients and contains no mention of histrionicotoxin or its toxicokinetics. |
| popPK | Goette-Di_2010 | irrelevant | 0 | 0 | The paper discusses brain natriuretic peptide (BNP) levels in transplant patients and contains no data regarding histrionicotoxin. |
| popPK | Groetzner_2008 | irrelevant | 0 | 0 | The paper focuses on immunosuppression in cardiac transplant recipients and contains no data regarding histrionicotoxin. |
| popPK | Groetzner_2009 | irrelevant | 0 | 0 | The paper studies immunosuppressive drugs (mycophenolate and sirolimus) in humans and contains no data on histrionicotoxin. |
| popPK | Gueta_2018 | irrelevant | 0 | 0 | The paper studies tacrolimus pharmacokinetics and rejection rates in heart transplant patients, with no mention or data regarding histrionicotoxin. |
| popPK | Hafer_2020 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| popPK | Hermann_2011 | irrelevant | 0 | 0 | The paper studies cyclosporine monitoring in heart transplant patients and contains no data for histrionicotoxin. |
| popPK | Ikura_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of tacrolimus in heart transplant patients and contains no data regarding histrionicotoxin. |
| popPK | Israeli_2010 | irrelevant | 0 | 0 | The paper discusses immune monitoring in cardiac transplant patients and contains no data regarding histrionicotoxin. |
| popPK | Kerschan-Schindl_2003 | irrelevant | 0 | 0 | The paper studies bone metabolism in heart transplant patients and does not contain any data on the toxicokinetics of histrionicotoxin. |
| PGx | Klauke_2008 | not_relevant | 0 | 0 | The paper studies the effect of gene variants on nephrotoxicity of cyclosporine/tacrolimus, not on the pharmacokinetics or pharmacodynamics of histrionicotoxin. |
| popPK | Kofler_2009 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of mycophenolate acid (MPA) and does not mention or contain data for histrionicotoxin. |
| PGx | Kolesár_2024 | not_relevant | 0 | 0 | The paper studies cardiac atrophy in rats and does not mention histrionicotoxin or any pharmacogenomic analysis. |
| popPK | Kolsrud_2016 | irrelevant | 0 | 0 | The paper investigates glomerular filtration rate in heart transplant recipients and does not involve histrionicotoxin. |
| popPK | Kong_2015 | irrelevant | 0 | 0 | The paper is a clinical study on the management of thoracic trauma in humans and contains no data regarding histrionicotoxin or its toxicokinetics. |
| popPK | Koning_2013 | irrelevant | 0 | 0 | The paper investigates clinical outcomes of hepatitis E virus infection in heart transplant recipients and contains no data on histrionicotoxin. |
| PGx | Koning_2013 | not_relevant | 0 | 0 | The paper concerns Hepatitis E virus infection in heart transplant recipients and does not mention histrionicotoxin or any pharmacogenomic effects. |
| popPK | Kędziora_2020 | irrelevant | 0 | 0 | The paper studies postoperative serum lactate levels in heart transplant patients and contains no kinetic data for histrionicotoxin. |
| popPK | Kędziora_2021 | irrelevant | 0 | 0 | The paper focuses on hemodynamic instability and lactate clearance in heart transplant patients and does not mention or measure histrionicotoxin. |
| popPK | Lehle_2007 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of cyclosporine A, not histrionicotoxin. |
| PGx | Lesche_2014 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of tacrolimus, not histrionicotoxin. |
| popPK | Lesche_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of everolimus, not histrionicotoxin. |
| PGx | Lesche_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of everolimus, not histrionicotoxin. |
| PGx | Liang_2013 | not_relevant | 0 | 0 | The drug of interest (histrionicotoxin) is not mentioned in the text; the study concerns azathioprine pharmacogenomics. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of tacrolimus, not histrionicotoxin. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies tacrolimus, not histrionicotoxin. |
| popPK | Lo_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mycophenolic acid (MPA), not histrionicotoxin. |
| popPK | Lorica_2013 | irrelevant | 0 | 0 | The paper concerns BK virus nephropathy in heart transplant recipients and contains no data on histrionicotoxin. |
| popPK | Lutomski_2026 | irrelevant | 0 | 0 | The paper is a narrative review on heart transplantation and LVAD rehabilitation and does not mention histrionicotoxin or report any kinetic parameters for it. |
| popPK | Nelson_2017 | irrelevant | 0 | 0 | The paper concerns everolimus pharmacokinetics/renal outcomes in heart transplant patients and does not mention histrionicotoxin. |
| popPK | Newland_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mycophenolic acid, not histrionicotoxin. |
| popPK | Nowicky_1996 | irrelevant | 0 | 0 | The paper studies the drug "Ukrain" on human xenografts in vitro, not the toxicokinetics of histrionicotoxin. |
| popPK | Oliver_2025 | irrelevant | 0 | 0 | The paper is a review of analgesics and does not report quantitative toxicokinetic parameters for histrionicotoxin. |
| PGx | Oreschak_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of calcineurin inhibitors (e.g., tacrolimus), not histrionicotoxin. |
| popPK | Ottoboni_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for aprepitant (an antiemetic drug), not the toxin histrionicotoxin. |
| popPK | Ottoboni_2019 | irrelevant | 0 | 0 | The paper focuses on the formulation and clinical efficacy of HTX-011 (bupivacaine/meloxicam) for pain relief and contains no toxicokinetic parameters for the substance histrionicotoxin. |
| popPK | Ottoboni_2019_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for HTX-019 (aprepitant), not the subject substance histrionicotoxin. |
| popPK | Ottoboni_2020 | irrelevant | 0 | 0 | The paper discusses the clinical efficacy and mechanism of action of a local anesthetic formulation (HTX-011 containing bupivacaine and meloxicam) for pain relief, and does not report any toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for histrionicotoxin. |
| popPK | Polzin_2025 | irrelevant | 0 | 0 | The paper is a study protocol for heart transplantation outcomes and contains no data on histrionicotoxin toxicokinetics. |
| popPK | Potratz_2026 | irrelevant | 0 | 0 | The paper focuses on the prognostic impact of nocturnal hypoxemic burden in heart failure patients and contains no data regarding histrionicotoxin. |
| popPK | Potter_2007 | irrelevant | 0 | 0 | The paper is a clinical study on sirolimus and calcineurin inhibitors in heart transplant patients and contains no data or mention of histrionicotoxin. |
| popPK | Páez_2023 | irrelevant | 0 | 0 | The paper studies nitric oxide removal using organic solvents (where HTX refers to a silicone fluid, not the toxin), and contains no kinetic data for histrionicotoxin. |
| popPK | Rapier_1987 | irrelevant | 0 | 0 | The paper reports a functional IC50 value for neurotransmitter release inhibition, which is a pharmacodynamic/pharmacological parameter, not a toxicokinetic parameter (such as half-life, clearance, or partition coefficient). |
| popPK | Riesenkampff_2015 | irrelevant | 0 | 0 | The paper studies cardiac fibrosis in humans using gadolinium MRI and does not report any toxicokinetic parameters for histrionicotoxin. |
| popPK | Saber-Moghaddam_2019 | irrelevant | 0 | 0 | The paper is a review regarding immunosuppressive drugs (mTOR inhibitors) in heart transplant patients and contains no mention of histrionicotoxin. |
| popPK | Sánchez-Lázaro_2010 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of mycophenolate acid/mofetil in human heart transplant patients and contains no mention of histrionicotoxin. |
| popPK | Tholén_2024 | irrelevant | 0 | 0 | The paper focuses on renal function assessment in heart transplant patients and does not mention histrionicotoxin or provide any kinetic parameters for it. |
| popPK | Vroemen_1985 | irrelevant | 0 | 0 | The paper focuses on bilirubin metabolism in Gunn rats and contains no mention of histrionicotoxin. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper describes a surgical method for heart transplantation in rats and reports surgical outcomes and renal function markers, but contains no data or kinetic parameters for the substance histrionicotoxin. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for caspofungin, not histrionicotoxin. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper focuses on tacrolimus pharmacokinetics in heart transplant patients and contains no data for histrionicotoxin. |
| popPK | Yip_2022 | irrelevant | 0 | 0 | The paper studies a local anesthetic formulation (bupivacaine/meloxicam) and does not report kinetic parameters for the substance histrionicotoxin. |
| popPK | Zietse_1995 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of 125I-iothalamate and 131I-orthoiodohippurate for measuring renal clearance, and does not mention histrionicotoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhistrionicotoxin%5D&body=Drug%3A%20histrionicotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_histrionicotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
