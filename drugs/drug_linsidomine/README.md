<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;linsidomine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linsidomine_SpreuxVaroquaux1991_reference&quot;,&quot;label&quot;:&quot;Spreux-Varoquaux_1991_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linsidomine/Linsidomine_SpreuxVaroquaux1991_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# linsidomine

- **generic name:** linsidomine
- **ATC codes:** `C01DX18`
- **DrugBank:** [DB13400](https://go.drugbank.com/drugs/DB13400)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 19:56 | 5:33 | 0/0/1 | 0/0/0 | 0/0/0 | 24,468/2,419 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Spreux-Varoquaux_1991_reference](drugs/drug_linsidomine/Linsidomine_SpreuxVaroquaux1991_reference.md) | Spreux-Varoquaux (1991) | — |

## Coverage

- **PubMed hits:** 16 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sennesael_1993.pdf` | Sennesael J et al., Pharmacokinetics of linsidomine (SIN 1)…, International journal of cl… (1993) | popPK | 8 | not captured | [8294165](https://pubmed.ncbi.nlm.nih.gov/8294165) | The study reports PK parameters for linsidomine, but only half-lives and renal excretion fractions are explicitly provided in the text, lacking standard clearance or volume values. |
| `Spreux-Varoquaux_1991.pdf` | Spreux-Varoquaux O et al., Pharmacokinetics of molsidomine and its…, British journal of clinical… (1991) | popPK | 8 | [10.1111/j.1365-2125.1991.tb03919.x](https://doi.org/10.1111/j.1365-2125.1991.tb03919.x) | [1777378](https://pubmed.ncbi.nlm.nih.gov/1777378) | The study reports quantitative pharmacokinetic parameters (half-life, AUC ratios) for linsidomine in humans, although it is a metabolite of molsidomine and lacks specific clearance or volume values. |
| `Spreux-Varoquaux_1991_2.pdf` | Spreux-Varoquaux O et al., Pharmacokinetics of molsidomine and of…, Fundamental & clinical phar… (1991) | popPK | 8 | [10.1111/j.1472-8206.1991.tb00741.x](https://doi.org/10.1111/j.1472-8206.1991.tb00741.x) | [1955198](https://pubmed.ncbi.nlm.nih.gov/1955198) | The study reports quantitative PK parameters (half-life, AUC ratios) for linsidomine (SIN-1) in humans, although specific clearance or volume values for linsidomine are not explicitly listed in the provided text. |
| `Remadi_2002.pdf` | Remadi JP et al., Effect of linsidomine on the human radi…, Clinical science (London, E… (2002) | pd | 4 | [10.1042/cs1030001](https://doi.org/10.1042/cs1030001) | [12095397](https://www.ncbi.nlm.nih.gov/pubmed/12095397) | metadata signals extractable PD data (EC50) |
| `Segarra_1999.pdf` | Segarra G et al., Comparative effects of dilator drugs on…, Clinical science (London, E… (1999) | pd | 4 | not captured | [9857107](https://www.ncbi.nlm.nih.gov/pubmed/9857107) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-20T19:55:02.108748+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Booth_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vasodilation in rat aorta, not a pharmacokinetic study, and reports no disposition parameters for linsidomine. |
| popPK | Foucher-Lavergne_1993 | irrelevant | 2 | 0 | The study focuses on hemodynamics and tolerability, and the provided evidence contains no quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for linsidomine. |
| popPK | Laferrière_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral analysis of topical analgesic combinations in rats, not a pharmacokinetic study, and reports no disposition parameters for linsidomine. |
| PD | Laferrière_2014 | not_relevant | 4 | 2 | The paper reports qualitative dose-dependent effects and dose-response curve shifts for linsidomine in an animal model, but the provided text does not contain specific numeric PD parameters (e.g., ED50, Emax) or data points to derive them. |
| popPK | Lea_1996 | irrelevant | 0 | 0 | The paper is a review of alprostadil, and linsidomine is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Lea_1996 | not_relevant | 0 | 0 | The paper is a review of alprostadil and only mentions linsidomine as a comparator agent without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for linsidomine. |
| popPK | Matthiesen_2021 | irrelevant | 0 | 0 | The study is an in-vitro microphysiological model (BBB-on-chip) investigating barrier integrity and antioxidant effects, not a pharmacokinetic study reporting quantitative disposition parameters for linsidomine. |
| PD | Matthiesen_2021 | not_relevant | 2 | 1 | The paper describes a microphysiological model and qualitative observations of barrier disruption by linsidomine, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Remadi_2002 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | Remadi_2002 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Rosenkranz_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for molsidomine, not linsidomine. |
| popPK | Segarra_1999 | irrelevant | 0 | 0 | The paper title indicates a study on dilator drugs in penile vasculature, which is unrelated to linsidomine pharmacokinetics. |
| PD | Segarra_1999 | not_relevant | 0 | 0 | The paper studies dilator drugs on penile vessels and does not mention linsidomine or report any exposure-response or dose-response data for it. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The paper studies dilator drugs on penile vasculature and does not mention linsidomine or pharmacogenomics. |
| popPK | Sennesael_1993 | relevant | 8 | 4 | The study reports PK parameters for linsidomine, but only half-lives and renal excretion fractions are explicitly provided in the text, lacking standard clearance or volume values. |
| popPK | Van_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on antioxidant screening where linsidomine (SIN-1) is used only as a peroxynitrite generator, not as the subject drug for pharmacokinetic analysis. |
| PD | Van_1998 | not_relevant | 0 | 0 | The paper describes a chemical screening method for antioxidants using linsidomine (SIN-1) as a peroxynitrite generator, not a pharmacodynamic study of linsidomine itself; no exposure-response or dose-response parameters for linsidomine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_linsidomine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
