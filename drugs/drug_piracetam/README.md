<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;piracetam&quot;}]"></div>

# piracetam

- **generic name:** piracetam
- **ATC codes:** `N06BX03`
- **DrugBank:** [DB09210](https://go.drugbank.com/drugs/DB09210) · **PubChem:** not captured
- **molar mass:** 142.1558 g/mol (C6H10N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Piracetam is a nootropic drug used for conditions affecting the brain, such as cognitive and neurological disorders. It is approved and used in several countries, but has been withdrawn in some markets, including the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410069](https://www.wikidata.org/wiki/Q410069) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:38 | 0:26 | 0/0/0 | 2/0/0 | 0/0/0 | 59,080/1,413 | ollama / glm-5.3-flash | 3 | 1/2 | 2/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bravo-Martínez_2012_CaV2_2_inhibition](drugs/drug_piracetam/pd_Bravo_Mart_nez_2012_CaV2_2_inhibition.md) | CaV2.2 channel current inhibition (percent of inhibition) ← piracetam · direct sigmoid Emax (Hill) effect | — | Bravo-Martínez J et al., A novel CaV2.2 channel inhibition by pi…, Experimental biology and me… (2012) | [10.1258/ebm.2012.012128](https://doi.org/10.1258/ebm.2012.012128) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chayrov_2022_cell_viability](drugs/drug_piracetam/pd_Chayrov_2022_cell_viability.md) | Cell viability of copper-injured APPswe cells ← piracetam-memantine · stimulation effect | — | Chayrov R et al., Synthesis, Neuroprotective Effect and P…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091108](https://doi.org/10.3390/ph15091108) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=piracetam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barkat_2014.pdf` | Barkat K et al., Development of a simple chromatographic…, Drug research (2014) | popPK | 8 | [10.1055/s-0033-1363248](https://doi.org/10.1055/s-0033-1363248) | [24443305](https://pubmed.ncbi.nlm.nih.gov/24443305) | Human single-dose PK study with numeric non-compartmental parameters (t1/2, Ke, Vd, AUC, Cmax) reported directly in the abstract. |
| `Abikhalil_1986.pdf` | Abikhalil F et al., A new algorithm for computing the param…, European journal of drug me… (1986) | popPK | 5 | [10.1007/BF03189775](https://doi.org/10.1007/BF03189775) | [3087752](https://pubmed.ncbi.nlm.nih.gov/3087752) | Piracetam PK used to test a fitting algorithm, but no numeric parameter values are given in the evidence. |

<sub>queue written 2026-10-07T00:38:36.722615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abikhalil_1986 | relevant | 5 | 1 | Piracetam PK used to test a fitting algorithm, but no numeric parameter values are given in the evidence. |
| popPK | Bravo-Martínez_2012 | irrelevant | 0 | 0 | In-vitro electrophysiology study of piracetam's effect on calcium channels; no PK disposition parameters reported. |
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | This is a synthesis/neuroprotection/solubility study of memantine conjugates; piracetam is only a chemical moiety, with no PK parameters reported. |
| popPK | Inozemtsev_2007 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats; piracetam is a test drug with no PK parameters reported. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | In-vitro pharmacology study of NMDA channel effects; piracetam shows no effect and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
