<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;dirithromycin&quot;}]"></div>

# dirithromycin

- **generic name:** dirithromycin
- **ATC codes:** `J01FA13`
- **DrugBank:** [DB00954](https://go.drugbank.com/drugs/DB00954) · **PubChem:** [CID 6473883](https://pubchem.ncbi.nlm.nih.gov/compound/6473883)
- **molar mass:** 835.086 g/mol (C42H78N2O14) — DrugBank
- **groups:** investigational

## About

Dirithromycin is a macrolide antibiotic that was intended to treat bacterial infections such as tonsillitis, pharyngitis, acute bronchitis, pneumonia, and staphylococcal infections. It is not an approved medicine today and is regarded as investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1989071](https://www.wikidata.org/wiki/Q1989071) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:03 | 2:54 | 0/0/0 | 0/2/0 | 0/0/0 | 44,812/3,424 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">human + animal</span> | [Goldberg_1996_CYP3A](drugs/drug_dirithromycin/pd_Goldberg_1996_CYP3A.md) | CYP3A activity ← dirithromycin · inhibition effect | — | Goldberg MJ et al., Effect of dirithromycin on human CYP3A…, Journal of clinical pharmac… (1996) | [10.1002/j.1552-4604.1996.tb04170.x](https://doi.org/10.1002/j.1552-4604.1996.tb04170.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [McConnell_1999_MIC90](drugs/drug_dirithromycin/pd_McConnell_1999_MIC90.md) | in vitro MIC ← dirithromycin · inhibition effect | — | McConnell SA et al., Review and comparison of advanced-gener…, Pharmacotherapy (1999) | [10.1592/phco.19.6.404.31054](https://doi.org/10.1592/phco.19.6.404.31054) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dirithromycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 50 returned
- **screened:** 6  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `LaBreque_1993.pdf` | LaBreque D et al., Pharmacokinetics of dirithromycin in pa…, The Journal of antimicrobia… (1993) | popPK | 10 | [10.1093/jac/32.5.741](https://doi.org/10.1093/jac/32.5.741) | [8125838](https://pubmed.ncbi.nlm.nih.gov/8125838) | The study reports quantitative PK parameters (Cmax, AUC, clearance) for dirithromycin in humans, with values clearly stated in the text. |
| `Sides_1993.pdf` | Sides GD et al., Pharmacokinetics of dirithromycin, The Journal of antimicrobia… (1993) | popPK | 10 | [10.1093/jac/31.suppl_c.65](https://doi.org/10.1093/jac/31.suppl_c.65) | [8478313](https://pubmed.ncbi.nlm.nih.gov/8478313) | The text explicitly reports quantitative pharmacokinetic parameters for dirithromycin in humans, including clearance (226-1040 mL/min), volume of distribution (800 L), and half-life (44 h). |
| `Fassbender_1996.pdf` | Fassbender M et al., Comparative pharmacokinetics of macroli…, Clinical microbiology and i… (1996) | popPK | 9 | [10.1016/s1198-743x(15)60281-6](https://doi.org/10.1016/s1198-743x(15)60281-6) | [11866772](https://pubmed.ncbi.nlm.nih.gov/11866772) | The study is a pharmacokinetic investigation of dirithromycin in humans, but the provided evidence contains only qualitative descriptions (e.g., "lowest serum concentrations") without specific quantitative parameter values. |
| `Geerdes-Fenge_1997.pdf` | Geerdes-Fenge HF et al., Comparative pharmacokinetics of dirithr…, European journal of clinica… (1997) | popPK | 9 | [10.1007/s002280050350](https://doi.org/10.1007/s002280050350) | [9403284](https://pubmed.ncbi.nlm.nih.gov/9403284) | The study is a relevant PK comparison in humans, but the specific standard disposition parameters (CL, V) are not explicitly reported as numeric values in the text, only Cmax, AUD, and MRT. |
| `Mazzei_1999.pdf` | Mazzei T et al., Pharmacokinetics of dirithromycin in pa…, Antimicrobial agents and ch… (1999) | popPK | 9 | [10.1128/AAC.43.7.1556](https://doi.org/10.1128/AAC.43.7.1556) | [10390202](https://pubmed.ncbi.nlm.nih.gov/10390202) | The study reports quantitative pharmacokinetic parameters including half-life, AUC, Cmax, and urinary excretion for dirithromycin in humans. |
| `Chamberland_1991.pdf` | Chamberland S et al., Comparative activity of macrolides agai…, Antimicrobial agents and ch… (1991) | pd | 4 | [10.1128/AAC.35.5.903](https://doi.org/10.1128/AAC.35.5.903) | [1854172](https://www.ncbi.nlm.nih.gov/pubmed/1854172) | metadata signals extractable PD data (IC50) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-13T11:03:57.281949+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsden_2001 | irrelevant | 1 | 0 | The paper is a general review of advanced-generation macrolides that discusses pharmacokinetic concepts qualitatively but does not provide quantitative disposition parameter values for dirithromycin. |
| popPK | Bachmann_1990 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for theophylline (the subject drug), while dirithromycin acts as a co-administered inhibitor affecting theophylline's clearance. |
| popPK | Bachmann_1993 | irrelevant | 2 | 0 | The study measures the pharmacokinetic parameters of theophylline, not dirithromycin; dirithromycin is used only as a co-administered agent to assess drug-drug interactions. |
| popPK | Bachmann_1995 | irrelevant | 2 | 0 | The study investigates the effect of dirithromycin on the pharmacokinetics of cyclosporine (the subject drug), not the PK of dirithromycin itself. |
| popPK | Bachmann_1997 | irrelevant | 1 | 0 | The study evaluates the pharmacokinetic parameters of the co-administered drug astemizole and its metabolite, not dirithromycin itself. |
| popPK | Bahal_1992 | irrelevant | 2 | 0 | This is a narrative review article discussing four macrolides, and the provided evidence contains no original quantitative pharmacokinetic parameter values for dirithromycin. |
| popPK | Baldit_1987 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Bergogne-Bérézin_1993 | irrelevant | 1 | 0 | The paper reports qualitative tissue distribution and concentration data rather than quantitative compartmental PK parameters (CL, V, Q, ka) or a population model. |
| popPK | Fassbender_1996 | relevant | 9 | 1 | The study is a pharmacokinetic investigation of dirithromycin in humans, but the provided evidence contains only qualitative descriptions (e.g., "lowest serum concentrations") without specific quantitative parameter values. |
| popPK | Geerdes-Fenge_1997 | relevant | 9 | 4 | The study is a relevant PK comparison in humans, but the specific standard disposition parameters (CL, V) are not explicitly reported as numeric values in the text, only Cmax, AUD, and MRT. |
| popPK | Goldberg_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the co-administered drug terfenadine to assess a drug interaction, and does not report quantitative PK parameters for dirithromycin itself. |
| popPK | Mazzei_1993 | irrelevant | 0 | 0 | The paper is a chemistry review discussing the structural modifications of macrolides and does not report any quantitative pharmacokinetic parameters for dirithromycin. |
| popPK | McConnell_1999 | irrelevant | 2 | 0 | This is a review article that discusses pharmacokinetic properties qualitatively but does not provide specific quantitative PK parameter values for dirithromycin. |
| popPK | McConnell_1999_2 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of theophylline to assess a drug-drug interaction, not the pharmacokinetic parameters of dirithromycin itself. |
| popPK | Müller_1996 | irrelevant | 3 | 2 | The study reports AUC and AUC ratios but lacks explicit clearance, volume, or rate constant parameters required for compartmental modeling. |
| popPK | Parsad_2003 | irrelevant | 0 | 0 | The paper is a general review of macrolides in dermatology and does not report any quantitative pharmacokinetic parameters or models for dirithromycin. |
| popPK | Periti_1992 | irrelevant | 0 | 0 | This is a review article discussing drug-drug interactions and classification of macrolides; it does not report quantitative population-pharmacokinetic parameters (CL, V, t1/2, etc.) for dirithromycin. |
| popPK | Simmons_2018 | irrelevant | 0 | 0 | This is a systematic review on drug interactions between antibiotics and hormonal contraception; dirithromycin is mentioned only as a co-administered antibiotic in one study, and no PK parameters for dirithromycin are reported. |
| popPK | Varanese_1993 | irrelevant | 4 | 0 | The study is pharmacokinetic but the provided evidence only describes trends in AUC and Cmax without listing specific numeric parameter values (CL, V, ka, etc.) in the text. |
| popPK | Watkins_1997 | irrelevant | 1 | 0 | This is a review of drug interactions that focuses on the pharmacokinetic parameters of co-administered drugs (cyclosporine, theophylline, etc.) rather than quantitative PK disposition parameters (CL, V, etc.) of dirithromycin itself. |
| popPK | Wermeling_1995 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for ethinyl estradiol (the oral contraceptive component) to assess a drug interaction, not for dirithromycin itself. |
| popPK | Wintermeyer_1996 | irrelevant | 2 | 0 | The paper is a narrative review discussing clinical efficacy and general PK properties without reporting specific quantitative parameter values or original model data. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and CYP3A4 inhibition of macrolides, specifically noting dirithromycin's lack of interaction, but contains no information on pharmacogenomics or gene variants. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
