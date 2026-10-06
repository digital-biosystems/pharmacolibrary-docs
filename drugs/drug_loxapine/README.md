<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;loxapine&quot;}]"></div>

# loxapine

- **generic name:** loxapine
- **ATC codes:** `N05AH01`
- **DrugBank:** [DB00408](https://go.drugbank.com/drugs/DB00408) · **PubChem:** [CID 3964](https://pubchem.ncbi.nlm.nih.gov/compound/3964)
- **molar mass:** 327.808 g/mol (C18H18ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Loxapine is an antipsychotic used to treat schizophrenia and related psychotic conditions such as schizophreniform disorder. It remains in use, with an authorised product in the European Union, and is mainly used for schizophrenia and bipolar disorder.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58614](https://www.wikidata.org/wiki/Q58614) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:50 | 0:30 | 0/0/0 | 1/0/0 | 0/0/0 | 32,013/905 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Biton_2012_Slack_Slo2_2_channel_activation](drugs/drug_loxapine/pd_Biton_2012_Slack_Slo2_2_channel_activation.md) | Slack (Slo2.2) channel activation ← loxapine · direct Emax (saturable) effect | — | Biton B et al., The antipsychotic drug loxapine is an o…, The Journal of pharmacology… (2012) | [10.1124/jpet.111.184622](https://doi.org/10.1124/jpet.111.184622) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=loxapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` binder | DrugBank actor |
| — | platelet | `SLC6A4` binder | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (binder), ADRA1B (binder), ADRA2A (binder), ADRA2B (binder), ADRA2C (binder), ADRB1 (binder), CHRM1 (binder), CHRM2 (binder), CHRM3 (binder), CHRM4 (binder), CHRM5 (binder), DRD1 (binder), DRD1 (target), DRD2 (target), DRD3 (binder), DRD4 (binder), DRD5 (binder), HRH1 (binder), HRH2 (binder), HRH4 (binder), HTR1A (binder), HTR1B (binder), HTR1D (binder), HTR1E (binder), HTR2A (target), HTR2C (target), HTR3A (binder), HTR5A (binder), HTR6 (binder), HTR7 (binder), SLC6A2 (binder), SLC6A3 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dong_2017.pdf` | Dong M et al., Clinical Trial Simulations and Pharmaco…, Clinical pharmacokinetics (2017) | popPK | 8 | [10.1007/s40262-017-0512-x](https://doi.org/10.1007/s40262-017-0512-x) | [28205038](https://pubmed.ncbi.nlm.nih.gov/28205038) | A population PK model of inhaled loxapine (allometric scaling, trial simulation) is described, but no numeric parameter values (CL, V, ka) appear in the provided evidence, likely residing in tables/figures not included. |
| `Wong_2013.pdf` | Wong YC et al., Brain disposition and catalepsy after i…, Pharmaceutical research (2013) | popPK | 7 | [10.1007/s11095-013-1080-x](https://doi.org/10.1007/s11095-013-1080-x) | [23739987](https://pubmed.ncbi.nlm.nih.gov/23739987) | Rat PK/PD study of loxapine with quantitative measures (tmax ≤15 min, brain AUC0-240min), but full disposition parameters (CL, V) are not shown and may live in figures/tables not provided. |

<sub>queue written 2026-10-06T16:50:21.053674+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biton_2012 | irrelevant | 0 | 0 | In-vitro electrophysiology/pharmacology study of loxapine as a channel opener; no PK disposition parameters reported. |
| popPK | Dong_2017 | relevant | 8 | 3 | A population PK model of inhaled loxapine (allometric scaling, trial simulation) is described, but no numeric parameter values (CL, V, ka) appear in the provided evidence, likely residing in tables/figures not included. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | Loxapine appears only as an antagonist in an in vitro vascular pharmacology study; no PK parameters for loxapine are reported. |
| popPK | Hsu_2021 | irrelevant | 0 | 0 | This is an in-vitro antibacterial study of loxapine derivatives against Salmonella in macrophage cell culture; no PK parameters for loxapine are reported. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | In-vitro pharmacology study of loxapine as a 5-HT receptor antagonist in rat jejunum; no PK parameters reported. |
| popPK | Wong_2013 | relevant | 7 | 4 | Rat PK/PD study of loxapine with quantitative measures (tmax ≤15 min, brain AUC0-240min), but full disposition parameters (CL, V) are not shown and may live in figures/tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
