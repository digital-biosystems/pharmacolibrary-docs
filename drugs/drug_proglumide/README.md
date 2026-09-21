<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;proglumide&quot;}]"></div>

# proglumide

- **generic name:** proglumide
- **ATC codes:** `A02BX06`
- **DrugBank:** [DB13431](https://go.drugbank.com/drugs/DB13431)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 06:29 | 6:43 | 0/0/0 | 1/1/0 | 0/0/0 | 159,075/6,735 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Martins_2006](drugs/drug_proglumide/pd_Martins_2006_unknown.md) | Martins SR et al., Activation of neural cholecystokinin-1…, Brazilian journal of medica… (2006) | [10.1590/s0100-879x2006000200014](https://doi.org/10.1590/s0100-879x2006000200014) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Blackmore_1992](drugs/drug_proglumide/pd_Blackmore_1992_unknown.md) | Blackmore M et al., Autocrine stimulation of growth of AR4-…, British journal of cancer (1992) | [10.1038/bjc.1992.212](https://doi.org/10.1038/bjc.1992.212) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=proglumide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CCKAR (target).</sub>

## Coverage

- **PubMed hits:** 87 matched, 55 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Botella_1992.pdf` | Botella A et al., Cholecystokinin and gastrin induce cell…, Gastroenterology (1992) | pd | 4 | [10.1016/0016-5085(92)90158-u](https://doi.org/10.1016/0016-5085(92)90158-u) | [1537515](https://www.ncbi.nlm.nih.gov/pubmed/1537515) | metadata signals extractable PD data (EC50) |
| `Chang_1985.pdf` | Chang RS et al., Cholecystokinin receptor mediated hydro…, Life sciences (1985) | pd | 4 | [10.1016/0024-3205(85)90392-3](https://doi.org/10.1016/0024-3205(85)90392-3) | [2983160](https://www.ncbi.nlm.nih.gov/pubmed/2983160) | metadata signals extractable PD data (EC50) |
| `Lotti_1986.pdf` | Lotti VJ et al., Evidence that cholecystokinin octapepti…, Digestion (1986) | pd | 4 | [10.1159/000199363](https://doi.org/10.1159/000199363) | [3781112](https://www.ncbi.nlm.nih.gov/pubmed/3781112) | metadata signals extractable PD data (EC50) |
| `Verspohl_1986.pdf` | Verspohl EJ et al., Proglumide (gastrin and cholecystokinin…, Naunyn-Schmiedeberg's archi… (1986) | pd | 4 | [10.1007/BF00504868](https://doi.org/10.1007/BF00504868) | [3012373](https://www.ncbi.nlm.nih.gov/pubmed/3012373) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-18T06:28:23.595555+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baldwin_2001 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on protein binding and does not report any pharmacokinetic parameters for proglumide. |
| PD | Baldwin_2001 | not_relevant | 3 | 2 | The paper reports qualitative inhibition of actin binding by proglumide but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative dose-response curve for proglumide in the provided text. |
| popPK | Bignamini_1979 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| popPK | Bitar_1982 | irrelevant | 0 | 0 | The study is a pharmacological investigation of smooth muscle receptors in guinea pigs where proglumide is used only as a receptor antagonist, not as a subject drug for pharmacokinetic analysis. |
| PD | Bitar_1982 | not_relevant | 1 | 0 | Proglumide is used only as a qualitative antagonist to establish receptor specificity; no numeric dose-response or concentration-effect parameters for proglumide are reported. |
| popPK | Blackmore_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell proliferation and receptor binding, not a pharmacokinetic study, and reports no disposition parameters for proglumide. |
| popPK | Bodnar_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of proglumide's effect on opioid analgesia in mice and does not report any pharmacokinetic parameters. |
| popPK | Botella_1992 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Botella_1992 | not_relevant | 0 | 0 | The paper focuses on receptor subtypes in pig ileum and does not mention proglumide or report any exposure-response or dose-response data for it. |
| popPK | Chang_1985 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Chang_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of CCK receptor-mediated hydrolysis in guinea pig gastric glands and does not mention proglumide or report any exposure-response or dose-response data for it. |
| popPK | Collins_1982 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction and does not report any pharmacokinetic parameters for proglumide. |
| popPK | Cox_1990 | irrelevant | 0 | 0 | The paper is a receptor binding study where proglumide is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| popPK | Doneparthi_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on proglumide's effect on tumor immunity and fibrosis in mice, containing no pharmacokinetic parameters or disposition data. |
| PD | Doneparthi_2025 | not_relevant | 0 | 0 | The paper is an in vivo mechanistic study using a fixed dose of proglumide in mice; it reports tumor volume and immune cell changes but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Fang_1989 | irrelevant | 0 | 0 | The study investigates the choleretic effect of proglumide on bile flow and composition, not its pharmacokinetic disposition parameters. |
| popPK | Fang_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic mechanism of proglumide as a P2Y14R antagonist in thrombosis models and does not report any pharmacokinetic parameters. |
| PD | Fang_2026 | not_relevant | 1 | 0 | The paper identifies proglumide as a P2Y14R antagonist and verifies its pharmacodynamic effect on thrombosis/NETs, but the provided text contains no numeric PD parameters (e.g., IC50, Emax) or exposure-response data. |
| popPK | Fujii_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a proglumide derivative (loxiglumide) on pancreatic acini and does not report pharmacokinetic parameters for proglumide. |
| popPK | Hahne_1981 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of proglumide as a CCK receptor antagonist in guinea pig pancreatic acini, reporting no pharmacokinetic parameters. |
| popPK | Iwamoto_1984 | irrelevant | 0 | 0 | The study is a mechanistic investigation of proglumide's effect on amylase release and does not report any pharmacokinetic parameters. |
| popPK | Kaltwasser_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacological potency and receptor binding of a proglumide analog (CR 1409), not on the pharmacokinetic disposition parameters of proglumide itself. |
| PD | Kaltwasser_1987 | not_relevant | 3 | 2 | The paper reports IC50 values for receptor binding and qualitative behavioral potency comparisons, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response curve for proglumide itself. |
| popPK | Kapás_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of CCK-induced hypothermia where proglumide is used only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Kapás_1987 | not_relevant | 1 | 0 | The paper reports a dose-response relationship for CCK-8, not proglumide; proglumide is only mentioned qualitatively as an antagonist that attenuated the response. |
| popPK | Karelina_2001 | irrelevant | 0 | 0 | The study investigates receptor binding properties of gastrin peptides in colonic crypts, using proglumide only as a non-selective antagonist for displacement experiments, and does not report any pharmacokinetic parameters for proglumide. |
| popPK | Kimura_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of CCK antagonistic activity in hog duodenal muscle, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Kombian_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment where proglumide is used only as a CCK receptor antagonist to block effects, not as the subject of pharmacokinetic analysis. |
| PD | Kombian_2005 | not_relevant | 0 | 0 | The paper reports the pharmacological effect of proglumide as a qualitative blocker of CCK-induced IPSC depression, but does not provide a concentration-response curve or numeric PD parameters (e.g., IC50) for proglumide itself. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | Proglumide is used only as a non-specific antagonist in a receptor binding assay, not as the subject of a pharmacokinetic study. |
| PD | Liu_2014 | not_relevant | 3 | 2 | The paper reports radioligand binding parameters (Kd, Bmax) and IC50 values for proglumide as a competitive antagonist in a binding assay, which characterizes receptor affinity rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect. |
| popPK | Lotti_1986 | irrelevant | 0 | 0 | no_text gate: only 212 chars of text extracted (&lt; 400) |
| PD | Lotti_1986 | not_relevant | 0 | 0 | The paper focuses on CCK-8 agonism and asperlicin antagonism in mouse stomach; proglumide is not mentioned or analyzed. |
| popPK | Louie_1988 | irrelevant | 0 | 0 | The study is an in vitro/in vivo pharmacological investigation of CCK antagonism, not a pharmacokinetic study, and proglumide is used only as a comparator agent. |
| popPK | Magous_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gastric acid secretion inhibition and does not report any pharmacokinetic parameters for proglumide. |
| popPK | Martins_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of CCK receptor mechanisms in rat duodenum where proglumide is used only as a receptor antagonist, not as a subject drug for PK analysis. |
| popPK | Menozzi_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor binding and muscle contraction, not a pharmacokinetic study, and reports no disposition parameters for proglumide. |
| popPK | Morini_1990 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization in guinea pig intestinal muscle cells, not a pharmacokinetic study, and proglumide is used only as a receptor antagonist. |
| popPK | Moummi_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle receptors where proglumide is used only as a receptor antagonist (comparator), with no pharmacokinetic parameters reported. |
| popPK | Panerai_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of morphine tolerance and dependence using proglumide as a CCK antagonist, and it does not report any pharmacokinetic parameters for proglumide. |
| PD | Panerai_1987 | not_relevant | 3 | 0 | The paper describes a qualitative dose-response shift (prevention of tolerance) but does not provide numeric PD parameters (e.g., ED50, Emax) or concentration-effect data for proglumide. |
| popPK | Poston_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of cholecystokinin antagonism in guinea pigs and does not report any pharmacokinetic parameters for proglumide. |
| popPK | Rattan_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of CCK receptor subtypes in the cat esophageal sphincter where proglumide is used only as a competitive antagonist to shift dose-response curves, with no pharmacokinetic parameters reported. |
| popPK | Schick_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of CCK-8 on feeding in rats, using proglumide only as a non-effective antagonist/comparator without reporting any pharmacokinetic parameters for proglumide. |
| PD | Schick_1986 | not_relevant | 3 | 2 | The paper reports a dose-response for CCK-8 but explicitly states that proglumide failed to modify the effect, providing no numeric PD parameters or exposure-response relationship for proglumide itself. |
| popPK | Setnikar_1987 | irrelevant | 2 | 0 | The study focuses on proglumetacin, with proglumide appearing only as a metabolite without reported quantitative PK parameters. |
| popPK | Stubbs_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of proglumide's effect on pancreatic secretion in dogs, not a pharmacokinetic study, and no disposition parameters are reported. |
| PD | Stubbs_1985 | not_relevant | 4 | 2 | The paper describes dose-response studies and qualitative competitive inhibition but does not provide numeric PD parameters (e.g., IC50, Emax) or specific concentration-effect data in the provided text. |
| popPK | Takács_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of proglumide on pancreatic secretion and CCK receptor blockade, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Tang_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic interaction between proglumide and morphine (tolerance/analgesia) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for proglumide. |
| popPK | Varghese_2024 | irrelevant | 0 | 0 | The paper is a study on fungal metabolites for breast cancer where proglumide is merely listed as a detected compound, with no pharmacokinetic parameters reported for it. |
| PD | Varghese_2024 | not_relevant | 0 | 0 | The paper reports IC50 values for a crude fungal extract, not for proglumide specifically, and proglumide is only listed as one of many identified metabolites without specific dose-response or PD data. |
| popPK | Verspohl_1986 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Verspohl_1986 | not_relevant | 0 | 0 | The provided text is only a title indicating an in vitro study; it contains no data, numeric parameters, or description of a concentration-effect relationship. |
| popPK | Wisner_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of Asperlicin in a pancreatitis model, with proglumide mentioned only as a comparator for receptor affinity, and no PK parameters are reported. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no information regarding proglumide, pharmacodynamics, or exposure-response relationships. |
| popPK | von_1988 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using proglumide analogues as antagonists, not a pharmacokinetic study reporting disposition parameters. |
| PD | von_1988 | not_relevant | 3 | 2 | The paper reports binding affinity (IC50) for proglumide analogues in a receptor binding assay, which is a pharmacological potency measure but not a pharmacodynamic exposure-response or dose-response relationship for a drug effect in a physiological system. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_proglumide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
