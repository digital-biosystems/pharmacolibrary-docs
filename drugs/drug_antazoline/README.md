<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;antazoline&quot;}]"></div>

# antazoline

- **generic name:** antazoline
- **ATC codes:** `R01AC04`, `R06AX05`
- **DrugBank:** [DB08799](https://go.drugbank.com/drugs/DB08799) · **PubChem:** [CID 2200](https://pubchem.ncbi.nlm.nih.gov/compound/2200)
- **molar mass:** 265.3529 g/mol (C17H19N3) — DrugBank
- **groups:** approved

## About

Antazoline is an antihistamine used to treat allergic eye conditions such as giant papillary conjunctivitis. It is an approved medicine, used topically in nasal preparations and also as a systemic antihistamine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q771975](https://www.wikidata.org/wiki/Q771975) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:07 | 2:48 | 0/0/0 | 1/0/0 | 0/0/0 | 68,979/4,674 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Li_2021_HBV_DNA](drugs/drug_antazoline/pd_Li_2021_HBV_DNA.md) | HBV DNA in the extracellular supernatant ← antazoline hydrochloride · direct sigmoid Emax (Hill) effect | — | Li J et al., Repurposing of Antazoline Hydrochloride…, Virologica Sinica (2021) | [10.1007/s12250-020-00306-2](https://doi.org/10.1007/s12250-020-00306-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=antazoline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 6  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Giebułtowicz_2016.pdf` | Giebułtowicz J et al., Application of a novel liquid chromatog…, Journal of pharmaceutical a… (2016) | popPK | 10 | [10.1016/j.jpba.2016.01.060](https://doi.org/10.1016/j.jpba.2016.01.060) | [26895496](https://pubmed.ncbi.nlm.nih.gov/26895496) | The abstract explicitly reports quantitative non-compartmental PK parameters (half-life, Vss, MRT, AUC, and Clearance) for antazoline in human subjects. |
| `Wang_2013.pdf` | Wang R et al., Determination of antazoline hydrochlori…, Biomedical chromatography :… (2013) | popPK | 7 | [10.1002/bmc.2965](https://doi.org/10.1002/bmc.2965) | [23847054](https://pubmed.ncbi.nlm.nih.gov/23847054) | Reports IV PK in rats with terminal half-life (3.53 h) and excretion percentages, but lacks explicit numeric values for clearance (CL), volume (V), and rate constants (ka/kel). |
| `Li_2013.pdf` | Li X et al., Determination of antazoline hydrochlori…, Journal of chromatography.… (2013) | popPK | 6 | [10.1016/j.jchromb.2013.04.021](https://doi.org/10.1016/j.jchromb.2013.04.021) | [23669609](https://pubmed.ncbi.nlm.nih.gov/23669609) | The study describes a PK analysis of antazoline in Beagle dogs, but the evidence text only contains analytical method details and lacks the specific numeric disposition parameters (CL, V, ka, etc.). |
| `Mourtada_2000.pdf` | Mourtada M et al., Effects of imidazoline binding site lig…, Naunyn-Schmiedeberg's archi… (2000) | pd | 5 | [10.1007/s002109900158](https://doi.org/10.1007/s002109900158) | [10685869](https://www.ncbi.nlm.nih.gov/pubmed/10685869) | metadata signals extractable PD data (EC50) |
| `Wethmar_2001.pdf` | Wethmar U et al., Interactions of ligands at angiotensin…, Japanese journal of pharmac… (2001) | pd | 5 | [10.1254/jjp.85.167](https://doi.org/10.1254/jjp.85.167) | [11286399](https://www.ncbi.nlm.nih.gov/pubmed/11286399) | metadata signals extractable PD data (IC50) |
| `Berdeu_1995.pdf` | Berdeu D et al., Evidence for two different imidazoline…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(94)00757-x](https://doi.org/10.1016/0014-2999(94)00757-x) | [7774667](https://www.ncbi.nlm.nih.gov/pubmed/7774667) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-13T12:07:36.061062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berdeu_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of imidazoline receptor binding and physiological effects (insulin secretion, vasoconstriction) in rat pancreas, not a pharmacokinetic study reporting disposition parameters for antazoline. |
| popPK | Dunne_1991 | irrelevant | 0 | 0 | In-vitro patch-clamp study of K+ATP channel blockade; antazoline is only a test agent with no PK disposition parameters. |
| popPK | Giebułtowicz_2016_2 | irrelevant | 0 | 0 | The paper is an analytical method development study focusing on sample extraction techniques and does not report pharmacokinetic parameters. |
| popPK | Giebułtowicz_2020 | irrelevant | 1 | 0 | The study is a qualitative metabolite identification study using LC-MS/MS and does not report quantitative pharmacokinetic parameters (CL, V, ka) for antazoline. |
| popPK | Li_2013 | relevant | 6 | 0 | The study describes a PK analysis of antazoline in Beagle dogs, but the evidence text only contains analytical method details and lacks the specific numeric disposition parameters (CL, V, ka, etc.). |
| popPK | Li_2021 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study of antazoline with no pharmacokinetic disposition parameters reported. |
| popPK | Milhaud_2000 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study investigating NMDA receptor blockade, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Mourtada_1997 | irrelevant | 0 | 0 | In vitro rat islet pharmacology study; antazoline is only a test compound, no PK parameters reported. |
| popPK | Mourtada_2000 | irrelevant | 0 | 0 | In-vitro cell biology study of imidazoline ligands on beta-cell growth; no PK parameters for antazoline. |
| popPK | Okumura_1992 | irrelevant | 0 | 0 | In-vitro pharmacology study of K+ channel antagonism in rat portal vein; antazoline is only a comparator with no PK parameters. |
| popPK | Olmos_1999 | irrelevant | 0 | 0 | In-vitro neuroprotection/pharmacology study; antazoline is a test compound, no PK parameters reported. |
| popPK | Onaran_1990 | irrelevant | 0 | 0 | In-vitro receptor-binding kinetics of antazoline as an antagonist in rabbit arteries, not pharmacokinetic disposition parameters; no numeric PK values present. |
| popPK | Pinthong_2004 | irrelevant | 0 | 0 | The study is an in-vitro investigation of platelet aggregation by imidazoline agents, not a pharmacokinetic study of antazoline disposition parameters. |
| popPK | Raasch_1999 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro pharmacology regarding MAO inhibition and does not report pharmacokinetic parameters for antazoline. |
| popPK | Sakuta_1994 | irrelevant | 0 | 0 | The paper is an electrophysiological study in Xenopus oocytes measuring K+ current inhibition (IC50), not a pharmacokinetic study of antazoline. |
| popPK | Sharif_1994 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay focused on emedastine, and antazoline is only used as a comparator ligand with no pharmacokinetic parameters reported. |
| popPK | Sharif_1996 | irrelevant | 0 | 0 | The paper describes in vitro ligand binding and functional studies for olopatadine, using antazoline only as a comparator, and does not report any pharmacokinetic parameters. |
| popPK | Sharif_1996_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of olopatadine where antazoline is only used as a comparator for binding affinity, and no pharmacokinetic parameters are reported. |
| popPK | Wethmar_2001 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| popPK | Wiedmann_2026 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel interactions and does not report pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
