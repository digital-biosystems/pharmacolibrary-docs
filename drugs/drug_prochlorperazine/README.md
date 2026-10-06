<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;prochlorperazine&quot;}]"></div>

# prochlorperazine

- **generic name:** prochlorperazine
- **ATC codes:** `N05AB04`
- **DrugBank:** [DB00433](https://go.drugbank.com/drugs/DB00433) · **PubChem:** [CID 4917](https://pubchem.ncbi.nlm.nih.gov/compound/4917)
- **molar mass:** 373.943 g/mol (C20H24ClN3S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Prochlorperazine is a phenothiazine antipsychotic and antiemetic used for conditions such as schizophrenia, anxiety, vomiting, and dementia-related symptoms. It is an approved medicine, also approved for veterinary use, though it carries a boxed warning and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2359690](https://www.wikidata.org/wiki/Q2359690) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:48 | 1:00 | 0/0/0 | 3/0/0 | 0/0/0 | 37,175/1,185 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2017_cell_viability_of_melanocytes_WST_1_assay](drugs/drug_prochlorperazine/pd_Otr_ba_2017_cell_viability_of_melanocytes_WST_1_assay.md) | cell viability of melanocytes (WST-1 assay) ← prochlorperazine · inhibition effect | — | Otręba M et al., Prochlorperazine interaction with melan…, Die Pharmazie (2017) | [10.1691/ph.2017.6787](https://doi.org/10.1691/ph.2017.6787) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2018_cell_viability_of_U87_MG_cells](drugs/drug_prochlorperazine/pd_Otr_ba_2018_cell_viability_of_U87_MG_cells.md) | cell viability of U87-MG cells ← prochlorperazine · inhibition effect | — | Otręba M et al., Perphenazine and prochlorperazine induc…, Die Pharmazie (2018) | [10.1691/ph.2018.7806](https://doi.org/10.1691/ph.2018.7806) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2018_2_viability](drugs/drug_prochlorperazine/pd_Otr_ba_2018_2_viability.md) | cell viability of lightly pigmented melanocytes (WST-1 assay) ← prochlorperazine · inhibition effect | — | Otręba M et al., In vitro melanogenesis inhibition by fl…, Daru : journal of Faculty o… (2018) | [10.1007/s40199-018-0206-4](https://doi.org/10.1007/s40199-018-0206-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prochlorperazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), DRD2 (target), HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Avram_2009.pdf` | Avram MJ et al., The pharmacokinetics and bioavailabilit…, Clinical pharmacology and t… (2009) | popPK | 8 | [10.1038/clpt.2008.184](https://doi.org/10.1038/clpt.2008.184) | [18830225](https://pubmed.ncbi.nlm.nih.gov/18830225) | Human PK study with a two-compartment population model of prochlorperazine, but numeric parameter values (CL, V, etc.) are not present in the evidence, only bioavailability 1.10. |

<sub>queue written 2026-10-06T16:47:51.142289+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avram_2009 | relevant | 8 | 3 | Human PK study with a two-compartment population model of prochlorperazine, but numeric parameter values (CL, V, etc.) are not present in the evidence, only bioavailability 1.10. |
| popPK | Berg_2004 | irrelevant | 0 | 0 | Prochlorperazine is only mentioned as a co-administered antiemetic; the PK model is for rebeccamycin, a different drug. |
| popPK | Otręba_2017 | irrelevant | 0 | 0 | In vitro study of prochlorperazine binding to melanin and effects on melanocytes; no PK disposition parameters (CL, V, half-life, PK model) reported. |
| popPK | Otręba_2018 | irrelevant | 0 | 0 | In-vitro cytotoxicity study (EC50 in U87-MG cells) with no PK disposition parameters for prochlorperazine. |
| popPK | Otręba_2018_2 | irrelevant | 0 | 0 | In-vitro melanogenesis/cytotoxicity study in melanocytes; no PK disposition parameters (CL, V, ka, half-life, PK model) for prochlorperazine are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
