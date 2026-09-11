# proglumide

- **generic name:** proglumide
- **ATC codes:** `A02BX06`
- **DrugBank:** [DB13431](https://go.drugbank.com/drugs/DB13431)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 20:31 | 12:22 | 0/0/0 | 1/1/0 | 0/0/0 | 80,356/7,555 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Martins_2006](drugs/drug_proglumide/pd_Martins_2006_unknown.md) | Martins SR et al., Activation of neural cholecystokinin-1…, Brazilian journal of medica… (2006) | [10.1590/s0100-879x2006000200014](https://doi.org/10.1590/s0100-879x2006000200014) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Blackmore_1992](drugs/drug_proglumide/pd_Blackmore_1992_unknown.md) | Blackmore M et al., Autocrine stimulation of growth of AR4-…, British journal of cancer (1992) | [10.1038/bjc.1992.212](https://doi.org/10.1038/bjc.1992.212) |

## Coverage

- **PubMed hits:** 89 matched, 55 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bignamini_1979.pdf` | Bignamini AA et al., Pharmacokinetic approach to proglumide…, Arzneimittel-Forschung (1979) | popPK | 8 | not captured | [582759](https://pubmed.ncbi.nlm.nih.gov/582759) | The study reports pharmacokinetic parameters for proglumide in rats, but only provides a qualitative terminal half-life (~24 h) and lacks specific numeric values for clearance, volume, or rate constants in the provided text. |
| `Botella_1992.pdf` | Botella A et al., Cholecystokinin and gastrin induce cell…, Gastroenterology (1992) | pd | 4 | [10.1016/0016-5085(92)90158-u](https://doi.org/10.1016/0016-5085(92)90158-u) | [1537515](https://www.ncbi.nlm.nih.gov/pubmed/1537515) | metadata signals extractable PD data (EC50) |
| `Chang_1985.pdf` | Chang RS et al., Cholecystokinin receptor mediated hydro…, Life sciences (1985) | pd | 4 | [10.1016/0024-3205(85)90392-3](https://doi.org/10.1016/0024-3205(85)90392-3) | [2983160](https://www.ncbi.nlm.nih.gov/pubmed/2983160) | metadata signals extractable PD data (EC50) |
| `Lotti_1986.pdf` | Lotti VJ et al., Evidence that cholecystokinin octapepti…, Digestion (1986) | pd | 4 | [10.1159/000199363](https://doi.org/10.1159/000199363) | [3781112](https://www.ncbi.nlm.nih.gov/pubmed/3781112) | metadata signals extractable PD data (EC50) |
| `Verspohl_1986.pdf` | Verspohl EJ et al., Proglumide (gastrin and cholecystokinin…, Naunyn-Schmiedeberg's archi… (1986) | pd | 4 | [10.1007/BF00504868](https://doi.org/10.1007/BF00504868) | [3012373](https://www.ncbi.nlm.nih.gov/pubmed/3012373) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T20:29:50.289662+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Baldwin_2001 | not_relevant | 3 | 2 | The paper reports qualitative inhibition of actin binding by proglumide but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative dose-response curve for proglumide in the provided text. |
| popPK | Bignamini_1979 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for proglumide in rats, but only provides a qualitative terminal half-life (~24 h) and lacks specific numeric values for clearance, volume, or rate constants in the provided text. |
| PD | Bitar_1982 | not_relevant | 1 | 0 | Proglumide is used only as a qualitative antagonist to establish receptor specificity; no numeric dose-response or concentration-effect parameters for proglumide are reported. |
| popPK | Bodnar_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of proglumide's effect on opioid analgesia in mice and does not report any pharmacokinetic parameters. |
| popPK | Botella_1992 | irrelevant | 0 | 0 | The paper title indicates a study on receptor subtypes and cell contraction in pig ileum, with no evidence of pharmacokinetic parameters for proglumide. |
| PD | Botella_1992 | not_relevant | 0 | 0 | The paper focuses on receptor subtypes in pig ileum and does not mention proglumide or report any exposure-response or dose-response data for it. |
| popPK | Chang_1985 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on cholecystokinin receptors in guinea pig gastric glands, with no mention of proglumide pharmacokinetics. |
| PD | Chang_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of CCK receptor-mediated hydrolysis in guinea pig gastric glands and does not mention proglumide or report any exposure-response or dose-response data for it. |
| popPK | Collins_1982 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction and receptor antagonism, not a pharmacokinetic study, and reports no disposition parameters for proglumide. |
| popPK | Cox_1990 | irrelevant | 0 | 0 | The paper is a receptor binding study where proglumide is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| popPK | Doneparthi_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on proglumide's effect on tumor immunity and fibrosis in mice, containing no pharmacokinetic parameters or disposition data. |
| PD | Doneparthi_2025 | not_relevant | 0 | 0 | The paper is an in vivo mechanistic study using a fixed dose of proglumide in mice; it reports tumor volume and immune cell changes but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Fang_2026 | not_relevant | 1 | 0 | The paper identifies proglumide as a P2Y14R antagonist and verifies its pharmacodynamic effect on thrombosis/NETs, but the provided text contains no numeric PD parameters (e.g., IC50, Emax) or exposure-response data. |
| popPK | Hahne_1981 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of proglumide as a CCK receptor antagonist in guinea pig pancreatic acini, reporting no pharmacokinetic parameters. |
| popPK | Iwamoto_1984 | irrelevant | 0 | 0 | The study is a mechanistic investigation of proglumide's effect on amylase release and does not report any pharmacokinetic parameters. |
| PD | Kaltwasser_1987 | not_relevant | 3 | 2 | The paper reports IC50 values for receptor binding and qualitative behavioral potency comparisons, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response curve for proglumide itself. |
| popPK | Kapás_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of CCK-induced hypothermia where proglumide is used only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Kapás_1987 | not_relevant | 1 | 0 | The paper describes a qualitative attenuation of CCK-8 induced hypothermia by proglumide but does not provide numeric dose-response parameters or concentration-effect data for proglumide itself. |
| popPK | Kombian_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment where proglumide is used only as a CCK receptor antagonist to block effects, not as the subject of pharmacokinetic analysis. |
| PD | Kombian_2005 | not_relevant | 0 | 0 | The paper reports the pharmacological effect of proglumide as a qualitative blocker of CCK-induced IPSC depression, but does not provide a concentration-response curve or numeric PD parameters (e.g., IC50) for proglumide itself. |
| PD | Liu_2014 | not_relevant | 3 | 2 | The paper reports radioligand binding parameters (Kd, Bmax) and IC50 values for proglumide as a competitive antagonist in a binding assay, which characterizes receptor affinity rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect. |
| popPK | Lotti_1986 | irrelevant | 0 | 0 | The paper concerns CCK-8 pharmacology in mouse stomach and does not report pharmacokinetic parameters for proglumide. |
| PD | Lotti_1986 | not_relevant | 0 | 0 | The paper focuses on CCK-8 agonism and asperlicin antagonism in mouse stomach; proglumide is not mentioned or analyzed. |
| popPK | Magous_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gastric acid secretion inhibition and does not report any pharmacokinetic parameters for proglumide. |
| popPK | Martins_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of CCK receptor mechanisms in rat duodenum where proglumide is used only as a receptor antagonist, not as a subject drug for PK analysis. |
| popPK | Morini_1990 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization in guinea pig intestinal muscle, not a pharmacokinetic study, and proglumide is used only as a receptor antagonist. |
| popPK | Moummi_1989 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gastrointestinal hormone receptors on isolated smooth muscle cells, not a pharmacokinetic study, and proglumide is used only as a receptor antagonist to determine IC50 values. |
| popPK | Panerai_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of morphine tolerance and dependence using proglumide as a CCK antagonist, and it does not report any pharmacokinetic parameters for proglumide. |
| PD | Panerai_1987 | not_relevant | 3 | 0 | The paper describes a qualitative dose-response shift (tolerance prevention) but does not provide numeric PD parameters (e.g., ED50, Emax) or concentration-effect data for proglumide. |
| popPK | Rattan_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of CCK receptor subtypes in the cat esophageal sphincter where proglumide is used only as a competitive antagonist to shift dose-response curves, with no pharmacokinetic parameters reported. |
| popPK | Setnikar_1987 | irrelevant | 2 | 0 | The study focuses on proglumetacin, with proglumide appearing only as a metabolite without reported quantitative PK parameters. |
| PD | Stubbs_1985 | not_relevant | 4 | 2 | The paper describes dose-response studies and qualitative competitive inhibition but does not provide numeric PD parameters (e.g., IC50, Emax) or specific concentration-effect data in the text. |
| popPK | Takács_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of proglumide on pancreatic secretion and CCK receptor blockade, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Tang_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic interaction between proglumide and morphine (tolerance/analgesia) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for proglumide. |
| PD | Varghese_2024 | not_relevant | 0 | 0 | The paper reports IC50 values for a crude fungal extract, not for proglumide specifically, and proglumide is only listed as one of many identified metabolites without specific dose-response or PD data. |
| popPK | Verspohl_1986 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of proglumide's effect on insulin secretion, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Verspohl_1986 | not_relevant | 0 | 0 | The provided text is only a title indicating an in vitro study; it contains no data, numeric parameters, or description of a concentration-effect relationship. |
| popPK | Wisner_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of Asperlicin in a pancreatitis model, with proglumide mentioned only as a comparator for receptor affinity, and no PK parameters are reported. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or parameters for proglumide. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no information regarding proglumide, pharmacodynamics, or exposure-response relationships. |
| PD | von_1988 | not_relevant | 3 | 2 | The paper reports binding affinity (IC50) for proglumide analogues in a receptor binding assay, which is a pharmacological potency measure but not a pharmacodynamic exposure-response or dose-response relationship for a drug effect in a physiological system. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_proglumide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
