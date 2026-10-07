<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;doxacurium chloride&quot;}]"></div>

# doxacurium chloride

- **generic name:** doxacurium chloride
- **ATC codes:** `M03AC07`
- **DrugBank:** [DB01135](https://go.drugbank.com/drugs/DB01135) · **PubChem:** [CID 5284551](https://pubchem.ncbi.nlm.nih.gov/compound/5284551)
- **molar mass:** 1035.2223 g/mol (C56H78N2O16) — DrugBank
- **groups:** approved, withdrawn

## About

Doxacurium chloride is a peripherally acting muscle relaxant, formerly approved for use as a neuromuscular blocking agent during surgery. It is no longer available, having been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5303681](https://www.wikidata.org/wiki/Q5303681) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:29 | 0:38 | 0/0/0 | 1/1/0 | 0/0/0 | 12,846/1,568 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gariepy_1993_force_of_contraction_of_the_adductor_pollicis](drugs/drug_doxacurium_chloride/pd_Gariepy_1993_force_of_contraction_of_the_adductor_pollicis.md) | force of contraction of the adductor pollicis ← doxacurium · delayed effect through an effect compartment | — | Gariepy LP et al., Influence of aging on the pharmacokinet…, Clinical pharmacology and t… (1993) | [10.1038/clpt.1993.30](https://doi.org/10.1038/clpt.1993.30) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhu_1997_TOF](drugs/drug_doxacurium_chloride/pd_Zhu_1997_TOF.md) | Neuro-muscular function ← doxacurium · delayed effect through an effect compartment | — | Zhu Y et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1997) | [10.1023/a:1025715626164](https://doi.org/10.1023/a:1025715626164) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=doxacurium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRNA2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gariepy_1993.pdf` | Gariepy LP et al., Influence of aging on the pharmacokinet…, Clinical pharmacology and t… (1993) | popPK | 10 | [10.1038/clpt.1993.30](https://doi.org/10.1038/clpt.1993.30) | [8453853](https://pubmed.ncbi.nlm.nih.gov/8453853) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, kco) for doxacurium in humans, with specific values provided in the text. |
| `Fisher_1999.pdf` | Fisher DM et al., The influence of renal function on the…, Anesthesia and analgesia (1999) | pd | 5 | [10.1097/00000539-199909000-00049](https://doi.org/10.1097/00000539-199909000-00049) | [10475326](https://www.ncbi.nlm.nih.gov/pubmed/10475326) | metadata signals extractable PD data (effectcompartment) |
| `Laurin_2001.pdf` | Laurin J et al., Peripheral link model as an alternative…, Journal of pharmacokinetics… (2001) | pd | 5 | [10.1023/a:1011513618081](https://doi.org/10.1023/a:1011513618081) | [11253615](https://www.ncbi.nlm.nih.gov/pubmed/11253615) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Roy_2004.pdf` | Roy JJ et al., Physicochemical properties of neuromusc…, British journal of anaesthe… (2004) | pd | 5 | [10.1093/bja/aeh181](https://doi.org/10.1093/bja/aeh181) | [15169739](https://www.ncbi.nlm.nih.gov/pubmed/15169739) | metadata signals extractable PD data (EC50) |
| `Zhu_1997.pdf` | Zhu Y et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1997) | pd | 5 | [10.1023/a:1025715626164](https://doi.org/10.1023/a:1025715626164) | [9353692](https://www.ncbi.nlm.nih.gov/pubmed/9353692) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07T02:29:29.022568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fisher_1999 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Laurin_1999 | irrelevant | 2 | 0 | The paper is a theoretical simulation study using previously published data rather than reporting original quantitative PK parameters for doxacurium. |
| popPK | Laurin_2001 | irrelevant | 1 | 0 | The paper is a PK-PD modeling study where doxacurium is only used as a validation comparator for mivacurium, and no specific quantitative PK parameter values for doxacurium are provided in the text. |
| popPK | Roy_2004 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Schmith_1992 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (rate of block recovery/slope) rather than pharmacokinetic disposition parameters (CL, V, t1/2), and no PK numeric values are provided in the evidence. |
| popPK | Zhu_1997 | irrelevant | 2 | 0 | The study focuses on PK-PD parameters (Ke0) and reports no quantitative disposition parameters (CL, V, Q) for doxacurium, with no numerical PK values present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
