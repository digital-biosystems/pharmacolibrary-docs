<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;lomustine&quot;}]"></div>

# lomustine

- **generic name:** lomustine
- **ATC codes:** `L01AD02`
- **DrugBank:** [DB01206](https://go.drugbank.com/drugs/DB01206) · **PubChem:** [CID 3950](https://pubchem.ncbi.nlm.nih.gov/compound/3950)
- **molar mass:** 233.695 g/mol (C9H16ClN3O2) — DrugBank
- **groups:** approved, investigational

## About

Lomustine is an alkylating anticancer drug used to treat cancers such as brain cancer, Hodgkin lymphoma, melanoma, and kidney cancer. It is an approved medicine, but carries a boxed warning, so its use requires careful risk management.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415378](https://www.wikidata.org/wiki/Q415378) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lomustine | parent | 233.695 | C9H16ClN3O2 | DrugBank | [3950](https://pubchem.ncbi.nlm.nih.gov/compound/3950) | Zhuang_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:31 | 0:32 | 0/1/0 | 0/0/0 | 0/0/0 | 52,789/4,226 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zhuang_2011_reference](drugs/drug_lomustine/Lomustine_Zhuang2011_reference.md) | — | 1-compartment (no model) | 3 | Zhuang L et al., HPLC method validation for the quantifi…, European journal of drug me… (2011) | [10.1007/s13318-011-0030-4](https://doi.org/10.1007/s13318-011-0030-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lomustine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), STMN4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2011.pdf` | Zhuang L et al., HPLC method validation for the quantifi…, European journal of drug me… (2011) | popPK | 9 | [10.1007/s13318-011-0030-4](https://doi.org/10.1007/s13318-011-0030-4) | [21380568](https://pubmed.ncbi.nlm.nih.gov/21380568) | The study reports population pharmacokinetic parameters (t1/2, AUC, Cmax) for a one-compartment model in rats, but lacks explicit values for clearance (CL) and volume (V). |
| `Villikka_1999.pdf` | Villikka K et al., Cytochrome P450-inducing antiepileptics…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.103403001](https://doi.org/10.1053/cp.1999.v66.103403001) | [10613614](https://www.ncbi.nlm.nih.gov/pubmed/10613614) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T17:30:41.549161+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Buckner_2003 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for irinotecan, not lomustine. |
| popPK | El-Yazigi_1988 | irrelevant | 0 | 0 | The pharmacokinetic parameters reported are for BCNU (Carmustine), not CCNU (Lomustine), in rabbits. |
| PGx | Le_1993 | not_relevant | 2 | 0 | The paper reports a drug-drug interaction potential (inhibition of CYP2D6 by lomustine) but does not report a pharmacokinetic or pharmacodynamic effect in patients stratified by genotype (e.g., CYP2D6 Poor Metabolizers vs. Extensive Metabolizers). |
| PGx | Prakash_2026 | not_relevant | 0 | 0 | The paper describes a computational framework for drug repurposing and does not report specific pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of lomustine. |
| PGx | Radtke_2022 | not_relevant | 2 | 5 | The paper reports no effect of ABCB1 knockout on the response to lomustine, whereas the significant effects were observed for temozolomide and carmustine. |
| popPK | Rodón_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of galunisertib, with lomustine serving only as a comparator drug in a combination therapy arm without any reported PK parameters for lomustine itself. |
| PD | Rodón_2015 | not_relevant | 4 | 4 | The paper reports PD for galunisertib (pSMAD2 inhibition vs concentration), but does not provide numeric PD parameters or an extractable exposure-response relationship for lomustine. |
| PGx | Villikka_1999 | not_relevant | 0 | 0 | The paper studies the pharmacokinetic effect of CYP3A4-inducing drugs on vincristine, not the effect of a gene variant on lomustine. |
| popPK | Wick_2004 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of neurotoxicity (cell death/caspase activity) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for lomustine. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper focuses on vinblastine metabolism; lomustine is only mentioned as a potential drug interaction inhibitor, not as the subject of pharmacogenomic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:30 UTC</sub>
