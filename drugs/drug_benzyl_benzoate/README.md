<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;benzyl benzoate&quot;}]"></div>

# benzyl benzoate

- **generic name:** benzyl benzoate
- **ATC codes:** `P03AX01`
- **DrugBank:** [DB00676](https://go.drugbank.com/drugs/DB00676) · **PubChem:** [CID 2345](https://pubchem.ncbi.nlm.nih.gov/compound/2345)
- **molar mass:** 212.2439 g/mol (C14H12O2) — DrugBank
- **groups:** approved

## About

Benzyl benzoate is used as an ectoparasiticide, mainly to treat scabies and other mite infestations of the skin. It is an approved medicine and appears on the WHO list of essential medicines, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413755](https://www.wikidata.org/wiki/Q413755) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:07 | 0:22 | 0/0/0 | 1/0/0 | 0/0/0 | 30,190/869 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Raynaud_2000_acaricidal_effect_on_Dermatophagoides_pteronyssinus](drugs/drug_benzyl_benzoate/pd_Raynaud_2000_acaricidal_effect_on_Dermatophagoides_pteronyss.md) | acaricidal effect on Dermatophagoides pteronyssinus ← benzyl benzoate · inhibition effect | — | Raynaud S et al., Squamocin and benzyl benzoate, acaricid…, Planta medica (2000) | [10.1055/s-0029-1243125](https://doi.org/10.1055/s-0029-1243125) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benzyl_benzoate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: LIPE (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akendengue_2003 | irrelevant | 0 | 0 | In-vitro acaricidal activity study of plant extracts; benzyl benzoate is only an isolated compound with EC50 values, no pharmacokinetic parameters. |
| popPK | Caballero-Gallardo_2011 | irrelevant | 0 | 0 | This is an insect repellency study of essential oils; benzyl benzoate is only a constituent tested for repellent activity, with no pharmacokinetic parameters. |
| popPK | Gleye_2003 | irrelevant | 0 | 0 | Benzyl benzoate is only a comparator acaricide in an in-vitro mite bioassay; no PK parameters reported. |
| popPK | Ohkawara_2010 | irrelevant | 0 | 0 | In-vitro TRPV1 screening study; benzyl benzoate is only a test compound with no PK parameters. |
| popPK | Price_2003 | irrelevant | 0 | 0 | Benzyl benzoate is only used as a tissue-clearing reagent; no PK parameters for it are reported. |
| popPK | Raynaud_2000 | irrelevant | 0 | 0 | Acaricidal efficacy study with EC50 values only; no pharmacokinetic parameters for benzyl benzoate. |
| popPK | Rolli_2016 | irrelevant | 0 | 0 | Phytochemistry/phytotoxicity study of plant oil constituents; benzyl benzoate is only a constituent, with no PK parameters. |
| popPK | Tariku_2010 | irrelevant | 0 | 0 | This is a phytochemistry/antileishmanial activity study; benzyl benzoate is only a volatile oil constituent, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
