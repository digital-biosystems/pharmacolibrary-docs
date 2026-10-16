<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;trimebutine&quot;}]"></div>

# trimebutine

- **generic name:** trimebutine
- **ATC codes:** `A03AA05`
- **DrugBank:** [DB09089](https://go.drugbank.com/drugs/DB09089) · **PubChem:** [CID 5573](https://pubchem.ncbi.nlm.nih.gov/compound/5573)
- **molar mass:** 387.476 g/mol (C22H29NO5) — DrugBank
- **groups:** approved, investigational

## About

Trimebutine is a gastrointestinal drug used to treat irritable bowel syndrome and other functional gut disorders. It is approved and used in several countries, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2569888](https://www.wikidata.org/wiki/Q2569888) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:20 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 28,684/1,040 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trimebutine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1G (activator), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), KCNMA1 (inhibitor), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Paquette_2014.pdf` | Paquette JM et al., Safety, tolerability and pharmacokineti…, Clinical therapeutics (2014) | popPK | 9 | [10.1016/j.clinthera.2014.08.005](https://doi.org/10.1016/j.clinthera.2014.08.005) | [25224876](https://pubmed.ncbi.nlm.nih.gov/25224876) | The study reports PK parameters for trimebutine, but specific quantitative values for clearance, volume, or half-life are not present in the provided text, only qualitative trends and limited AUC/Tmax ranges. |
| `Jiang_2004.pdf` | Jiang H et al., [Pharmacokinetics and bioequivalence of…, Yao xue xue bao = Acta phar… (2004) | popPK | 8 | not captured | [15171657](https://pubmed.ncbi.nlm.nih.gov/15171657) | The study reports quantitative PK parameters (T1/2, Tmax, Cmax) for trimebutine in humans, but lacks clearance (CL) and volume (V) values. |
| `Li_2001.pdf` | Li F et al., Determination of trimebutine maleate in…, Biomedical chromatography :… (2001) | popPK | 8 | [10.1002/bmc.52](https://doi.org/10.1002/bmc.52) | [11438965](https://pubmed.ncbi.nlm.nih.gov/11438965) | The study reports quantitative pharmacokinetic parameters (AUC, Cmax, t1/2, Tmax) for trimebutine in rats, though compartmental parameters like CL and V are not explicitly listed. |
| `Saivin_2000.pdf` | Saivin S et al., Pharmacokinetics and bioequivalence of…, Arzneimittel-Forschung (2000) | popPK | 8 | [10.1055/s-0031-1300278](https://doi.org/10.1055/s-0031-1300278) | [10994155](https://pubmed.ncbi.nlm.nih.gov/10994155) | The study reports pharmacokinetics of trimebutine's active metabolite (desmethyl-trimebutine) in humans, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Nagasaki_1993.pdf` | Nagasaki M et al., Effect of trimebutine on voltage-activa…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13823.x](https://doi.org/10.1111/j.1476-5381.1993.tb13823.x) | [8220900](https://www.ncbi.nlm.nih.gov/pubmed/8220900) | metadata signals extractable PD data (IC50) |
| `Pascaud_1987.pdf` | Pascaud X et al., [Involvement of opiate receptors in the…, Gastroenterologie clinique… (1987) | pd | 4 | not captured | [3038655](https://www.ncbi.nlm.nih.gov/pubmed/3038655) | metadata signals extractable PD data (IC50) |
| `Pascaud_1989.pdf` | Pascaud X et al., [Mode of action of trimebutine: involve…, Presse medicale (Paris, Fra… (1989) | pd | 4 | not captured | [2537972](https://www.ncbi.nlm.nih.gov/pubmed/2537972) | metadata signals extractable PD data (IC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T13:20:26.549994+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | A_2021 | irrelevant | 0 | 0 | The study evaluates antiemetic efficacy of palonosetron and granisetron, and trimebutine is only mentioned as a rescue medication without any pharmacokinetic data. |
| popPK | Cho_2010 | irrelevant | 2 | 0 | The study is a pharmaceutical formulation development paper that reports bioavailability comparisons (likely AUC/Cmax ratios) but does not provide specific quantitative PK parameters (CL, V, ka) for trimebutine. |
| popPK | Iwase_2017 | irrelevant | 0 | 0 | The study is an in-vitro investigation of CYP inhibition by trimebutine and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for trimebutine. |
| PGx | Iwase_2017 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of trimebutine on CYP enzymes in vitro, not the effect of genetic variants on trimebutine's pharmacokinetics or pharmacodynamics. |
| popPK | Joo_1999 | irrelevant | 2 | 0 | The paper describes an analytical HPLC method for trimebutine and its metabolite, and while it mentions application to PK studies, no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) are reported in the provided evidence. |
| popPK | Miyata_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of stress-induced defecation and receptor binding, reporting ED50 values for efficacy rather than pharmacokinetic disposition parameters (CL, V, t1/2) for trimebutine. |
| popPK | Nagasaki_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of binding interactions and muscle contraction, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nagasaki_1993 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Nagasaki_1993_2 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of trimebutine's effect on ion channels, not a pharmacokinetic study. |
| popPK | Paquette_2014 | relevant | 9 | 2 | The study reports PK parameters for trimebutine, but specific quantitative values for clearance, volume, or half-life are not present in the provided text, only qualitative trends and limited AUC/Tmax ranges. |
| popPK | Pascaud_1987 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Pascaud_1987 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to extract a PD relationship. |
| popPK | Pascaud_1989 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Pascaud_1989 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action (opioid receptor involvement) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Roman_1999 | irrelevant | 0 | 0 | The paper is a mechanistic/pharmacological study reporting binding affinities and electrophysiological effects, not pharmacokinetic disposition parameters. |
| popPK | Saivin_2000 | relevant | 8 | 0 | The study reports pharmacokinetics of trimebutine's active metabolite (desmethyl-trimebutine) in humans, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Takenaga_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction in guinea pigs, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Yu_2001 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
