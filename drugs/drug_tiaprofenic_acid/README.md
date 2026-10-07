<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tiaprofenic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TiaprofenicAcid_Nilsen1985v2_reference&quot;,&quot;label&quot;:&quot;Nilsen_1985_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tiaprofenic acid

- **generic name:** tiaprofenic acid
- **ATC codes:** `M01AE11`
- **DrugBank:** [DB01600](https://go.drugbank.com/drugs/DB01600) · **PubChem:** [CID 5468](https://pubchem.ncbi.nlm.nih.gov/compound/5468)
- **molar mass:** 260.308 g/mol (C14H12O3S) — DrugBank
- **groups:** approved

## About

It is an approved medicine, though it is not widely used today and has largely been superseded by other NSAIDs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419926](https://www.wikidata.org/wiki/Q419926) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tiaprofenic_acid (tiaprofenic acid) | metabolite | 260.308 | C14H12O3S | DrugBank | [5468](https://pubchem.ncbi.nlm.nih.gov/compound/5468) | Nilsen_1985_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:25 | 0:32 | 1/0/0 | 0/0/0 | 0/0/0 | 11,362/1,114 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nilsen_1985_2_reference](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Nilsen OG et al., Steady state pharmacokinetics of tiapro…, Arzneimittel-Forschung (1985) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tiaprofenic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nilsen_1985_2.pdf` | Nilsen OG et al., Steady state pharmacokinetics of tiapro…, Arzneimittel-Forschung (1985) | popPK | 10 | not captured | [4026913](https://pubmed.ncbi.nlm.nih.gov/4026913) | The paper reports steady-state pharmacokinetic parameters for tiaprofenic acid in humans, including numeric values for clearance, volume of distribution, absorption rate, and half-life in the abstract. |
| `Knights_2009.pdf` | Knights KM et al., Aldosterone glucuronidation by human li…, British journal of clinical… (2009) | pgx | 7 | [10.1111/j.1365-2125.2009.03469.x](https://doi.org/10.1111/j.1365-2125.2009.03469.x) | [19740398](https://www.ncbi.nlm.nih.gov/pubmed/19740398) | metadata signals extractable PGX data (UGT1A10, PK/PD-context) |

<sub>queue written 2026-10-07T01:25:49.699421+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Jin_1993 | not_relevant | 0 | 0 | The paper describes in vitro enzyme cloning and substrate screening, reporting relative activity rankings but no genetic variation, pharmacokinetic parameters, or pharmacodynamic effects in humans. |
| PGx | Knights_2009 | not_relevant | 0 | 0 | The paper studies the inhibition of aldosterone glucuronidation by tiaprofenic acid, not the pharmacokinetics or pharmacodynamics of tiaprofenic acid itself, and contains no pharmacogenomic data. |
| popPK | Vakily_1999 | irrelevant | 4 | 0 | The study focuses on pharmacokinetic-pharmacodynamic modeling of GI toxicity and notes that specific pharmacokinetic data for powder and INC formulations were "previously reported," implying no original quantitative PK parameter values (CL, V, etc.) for tiaprofenic acid are provided in this text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:25 UTC</sub>
