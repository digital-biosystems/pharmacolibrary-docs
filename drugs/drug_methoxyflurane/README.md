<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;methoxyflurane&quot;}]"></div>

# methoxyflurane

- **generic name:** methoxyflurane
- **ATC codes:** `N02BG09`
- **DrugBank:** [DB01028](https://go.drugbank.com/drugs/DB01028)
- **groups:** approved, investigational, vet_approved, withdrawn

## About

**Description.** An inhalation anesthetic. Currently, methoxyflurane is rarely used for surgical, obstetric, or dental anesthesia. If so employed, it should be administered with nitrous oxide to achieve a relatively light level of anesthesia, and a neuromuscular blocking agent given concurrently to obtain the desired degree of muscular relaxation. (From AMA Drug Evaluations Annual, 1994, p180)

In the US, methoxyflurane is one of the products that have been withdrawn or removed from the market for reasons of safety or effectiveness.[L43942]

**Indication.** For use in the induction and maintenance of general anesthesia

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 01:22 | 10:13 | 0/0/0 | 1/1/0 | 0/0/0 | 179,014/4,889 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 3/3 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Downie_1996](drugs/drug_methoxyflurane/pd_Downie_1996_peak_current.md) | Downie DL et al., Effects of inhalational general anaesth…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15430.x](https://doi.org/10.1111/j.1476-5381.1996.tb15430.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Downie_1996](drugs/drug_methoxyflurane/pd_Downie_1996_unknown.md) | Downie DL et al., Effects of inhalational general anaesth…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15430.x](https://doi.org/10.1111/j.1476-5381.1996.tb15430.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Jenkins_1996](drugs/drug_methoxyflurane/pd_Jenkins_1996_5_HT3_current.md) | Jenkins A et al., Actions of general anaesthetics on 5-HT…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15314.x](https://doi.org/10.1111/j.1476-5381.1996.tb15314.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Jenkins_1996](drugs/drug_methoxyflurane/pd_Jenkins_1996_unknown.md) | Jenkins A et al., Actions of general anaesthetics on 5-HT…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15314.x](https://doi.org/10.1111/j.1476-5381.1996.tb15314.x) |

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpenter_1986.pdf` | Carpenter RL et al., Pharmacokinetics of inhaled anesthetics…, Anesthesia and analgesia (1986) | popPK | 10 | not captured | [3706798](https://pubmed.ncbi.nlm.nih.gov/3706798) | The study is a primary pharmacokinetic investigation of methoxyflurane in humans using compartmental modeling, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract or text. |
| `Charlesworth_1994.pdf` | Charlesworth P et al., Calcium channel currents in bovine adre…, The Journal of physiology (1994) | pd | 4 | [10.1113/jphysiol.1994.sp020462](https://doi.org/10.1113/jphysiol.1994.sp020462) | [7707224](https://www.ncbi.nlm.nih.gov/pubmed/7707224) | metadata signals extractable PD data (IC50) |
| `Martin_1995.pdf` | Martin DC et al., Spermidine attenuation of volatile anes…, Biochemical pharmacology (1995) | pd | 4 | [10.1016/0006-2952(95)02017-9](https://doi.org/10.1016/0006-2952(95)02017-9) | [7503786](https://www.ncbi.nlm.nih.gov/pubmed/7503786) | metadata signals extractable PD data (EC50) |
| `Waud_1979.pdf` | Waud BE et al., Effects of volatile anesthetics on dire…, Anesthesiology (1979) | pd | 4 | [10.1097/00000542-197902000-00006](https://doi.org/10.1097/00000542-197902000-00006) | [35042](https://www.ncbi.nlm.nih.gov/pubmed/35042) | metadata signals extractable PD data (indirectresponse) |

<sub>queue written 2026-09-21T01:20:26.587045+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_1975 | irrelevant | 0 | 0 | The study focuses on the interaction between halothane and propranolol on uterine contractions, with methoxyflurane mentioned only as a comparative agent without any pharmacokinetic parameter reporting. |
| PD | Anderson_1975 | not_relevant | 1 | 0 | The paper only qualitatively mentions that methoxyflurane increased the effect of propranolol, without providing any numeric concentration-effect data or PD parameters for methoxyflurane itself. |
| popPK | Bader_2023 | irrelevant | 0 | 0 | The paper is a virology study on SARS-CoV-2 in mice and does not involve methoxyflurane or pharmacokinetic parameters. |
| PD | Bader_2023 | not_relevant | 0 | 0 | The paper focuses on SARS-CoV-2 virology and host pathology in mice and does not report any pharmacodynamic or exposure-response data for methoxyflurane. |
| popPK | Bastron_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal transport inhibition, not a pharmacokinetic study reporting disposition parameters for methoxyflurane. |
| PD | Bastron_1977 | not_relevant | 4 | 2 | The paper describes a linear dose-dependent inhibition of PAH uptake by methoxyflurane in vitro, but the provided text does not contain specific numeric PD parameters (such as slope, IC50, or specific concentration-effect data points) required to derive a quantitative relationship. |
| popPK | Carpenter_1986 | relevant | 10 | 0 | The study is a primary pharmacokinetic investigation of methoxyflurane in humans using compartmental modeling, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract or text. |
| popPK | Charlesworth_1994 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Charlesworth_1994 | not_relevant | 0 | 0 | The paper focuses on calcium channel currents in bovine adrenal chromaffin cells and does not report pharmacodynamic or exposure-response data for methoxyflurane. |
| popPK | Conway_1986 | irrelevant | 2 | 0 | The paper is a simulation study of gas exchange in a circle system where methoxyflurane is a co-administered agent, and it does not report specific quantitative PK parameters (CL, V, etc.) for methoxyflurane. |
| PD | Conway_1986 | not_relevant | 0 | 0 | The paper describes a mathematical model of gas exchange kinetics (PK) in a circle system, not a pharmacodynamic (exposure-response) relationship or effect modeling. |
| popPK | Cousins_1973 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| popPK | Cullen_1990 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of amitraz in dogs, using methoxyflurane only as an anesthetic agent, and reports no pharmacokinetic parameters for methoxyflurane. |
| PD | Cullen_1990 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of amitraz, not methoxyflurane; methoxyflurane is only mentioned as the anesthetic agent used in the experimental setup. |
| popPK | Delaruelle_1976 | irrelevant | 0 | 0 | The paper is a clinical description of an anesthetic technique where methoxyflurane is used as a maintenance agent, but it does not report any quantitative pharmacokinetic parameters. |
| PD | Delaruelle_1976 | not_relevant | 0 | 0 | The paper describes a clinical anesthetic technique ("Protected Sleep") and qualitative physiological outcomes, but does not report any quantitative pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters for methoxyflurane. |
| popPK | Downie_1996 | irrelevant | 0 | 0 | The paper is an electrophysiological study of glycine receptors where methoxyflurane is used as a modulator/comparator, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hansen_2013 | irrelevant | 0 | 0 | The paper is a systematic review of intranasal fentanyl where methoxyflurane is only a comparator, and no PK parameters for methoxyflurane are reported. |
| PD | Hansen_2013 | not_relevant | 0 | 0 | The paper is a systematic review of intranasal fentanyl and does not report any pharmacodynamic or exposure-response data for methoxyflurane. |
| popPK | Jenkins_1996 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on 5-HT3 receptors, not a pharmacokinetic study, and reports no disposition parameters for methoxyflurane. |
| popPK | Jenkins_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA(A) receptor potentiation, not a pharmacokinetic study reporting disposition parameters for methoxyflurane. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study investigates EEG and evoked potential effects of methoxyflurane in ponies, not pharmacokinetic disposition parameters. |
| popPK | Kress_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium flux in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kress_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in cell lines, not a pharmacokinetic study, and reports no disposition parameters for methoxyflurane. |
| popPK | Krisna_1977 | irrelevant | 0 | 0 | The study investigates the chronotropic effects of methoxyflurane in isolated rat atrial preparations and does not report any pharmacokinetic parameters. |
| popPK | M_2025 | irrelevant | 0 | 0 | The paper is a study on caspase-8 and SARS-CoV-2 pathology in mice, containing no pharmacokinetic data for methoxyflurane. |
| PD | M_2025 | not_relevant | 0 | 0 | The paper investigates the role of caspase-8 in SARS-CoV-2 pathogenesis using gene-targeted mice and inhibitors, but does not report any pharmacodynamic (exposure-response or dose-response) relationship for methoxyflurane. |
| popPK | Martin_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor binding and does not report pharmacokinetic parameters for methoxyflurane. |
| PD | Martin_1995 | not_relevant | 3 | 2 | The paper reports qualitative concentration-dependent inhibition and a potency order for methoxyflurane, but does not provide specific numeric PD parameters (e.g., IC50, Emax) or a quantitative dose-response curve for the drug. |
| popPK | Martin_1995_2 | irrelevant | 0 | 0 | no_text gate: only 232 chars of text extracted (&lt; 400) |
| PD | Martin_1995_2 | not_relevant | 0 | 0 | The paper studies the effect of spermidine on NMDA receptor binding in the presence of volatile anesthetics, not the pharmacodynamic exposure-response relationship of methoxyflurane itself. |
| PGx | Mazze_1974 | not_relevant | 0 | 0 | The paper describes the general biotransformation of methoxyflurane without reporting specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Miller_1996 | irrelevant | 0 | 0 | The study investigates the immunological effects of methoxyflurane on neutrophil adhesion and does not report any pharmacokinetic parameters. |
| PD | Miller_1996 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of anesthetic effects on neutrophil accumulation but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for methoxyflurane. |
| popPK | Niezgoda_2026 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ticagrelor, with methoxyflurane serving only as a comparator analgesic, and no PK parameters for methoxyflurane are reported. |
| PD | Niezgoda_2026 | not_relevant | 2 | 1 | The study reports qualitative differences in platelet reactivity and PK parameters between groups but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for methoxyflurane. |
| popPK | Ogli_1994 | irrelevant | 0 | 0 | The paper is a review of anaesthetic mechanisms and physicochemical interactions, not a pharmacokinetic study, and contains no quantitative disposition parameters for methoxyflurane. |
| PD | Ogli_1994 | not_relevant | 1 | 0 | The paper is a review of anaesthetic mechanisms; it mentions Hill coefficients for other agents (enflurane, isoflurane, etc.) and discusses methoxyflurane's interaction with lipid membranes via NMR, but it does not report any numeric dose-response or concentration-effect parameters for methoxyflurane. |
| PGx | PMID30499100_2019 | not_relevant | 0 | 0 | The paper discusses RYR1/CACNA1S variants and malignant hyperthermia susceptibility, which is a safety/toxicity issue, not a change in the standard PK/PD parameters of methoxyflurane. |
| popPK | Patel_1996_2 | irrelevant | 0 | 0 | The paper is a review of sevoflurane, and methoxyflurane is only mentioned as a comparator regarding nephrotoxicity without any PK parameters. |
| PD | Patel_1996_2 | not_relevant | 0 | 0 | The paper is a review of sevoflurane and only mentions methoxyflurane qualitatively regarding nephrotoxicity, providing no PD or exposure-response data for methoxyflurane. |
| popPK | Steffey_1984 | irrelevant | 0 | 0 | The study focuses on circulatory and respiratory effects (hemodynamics and ventilation) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Tas_1987 | irrelevant | 0 | 0 | The study investigates the pharmacological effect of methoxyflurane on norepinephrine uptake in cells, not its pharmacokinetic disposition parameters. |
| popPK | Waud_1979 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Waud_1979 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of volatile anesthetics on skeletal muscle stimulation and does not report pharmacokinetic data or exposure-response relationships for methoxyflurane. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not report pharmacokinetic parameters for methoxyflurane. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for PONV and does not mention methoxyflurane or report any pharmacodynamic or exposure-response parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_methoxyflurane`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
