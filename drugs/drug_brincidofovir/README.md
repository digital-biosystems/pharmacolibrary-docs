<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;brincidofovir&quot;}]"></div>

# brincidofovir

- **generic name:** brincidofovir
- **ATC codes:** `J05AB17`
- **DrugBank:** [DB12151](https://go.drugbank.com/drugs/DB12151) · **PubChem:** [CID 483477](https://pubchem.ncbi.nlm.nih.gov/compound/483477)
- **molar mass:** 561.701 g/mol (C27H52N3O7P) — DrugBank
- **groups:** approved, investigational

## About

Brincidofovir is an antiviral drug used to treat smallpox. It is an approved medicine, though it carries a boxed warning, and has also been studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15411004](https://www.wikidata.org/wiki/Q15411004) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:55 | 0:31 | 0/0/0 | 1/0/0 | 0/0/0 | 49,655/1,158 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bua_2019_inhibition_of_B19V_replication](drugs/drug_brincidofovir/pd_Bua_2019_inhibition_of_B19V_replication.md) | inhibition of B19V replication ← brincidofovir · direct Emax (saturable) effect | — | Bua G et al., Antiviral activity of brincidofovir on…, Antiviral research (2019) | [10.1016/j.antiviral.2018.12.003](https://doi.org/10.1016/j.antiviral.2018.12.003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brincidofovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP4F2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP4F2` inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: POLB (inhibitor), POLD1 (inhibitor), POLD4 (inhibitor), POLE2 (inhibitor), POLG (inhibitor), POLG2 (inhibitor), POLN (inhibitor), POLQ (inhibitor), SMPD1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bravo_2011 | irrelevant | 1 | 0 | Efficacy study of HDP-cidofovir (brincidofovir) in guinea pigs with no PK disposition parameters reported; only EC50 and dosing regimens appear. |
| popPK | Bua_2019 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/CC50) with no pharmacokinetic disposition parameters for brincidofovir. |
| popPK | Chamberlain_2019 | irrelevant | 0 | 0 | This is an in-vitro mechanistic/virology study of cidofovir diphosphate inhibition of adenovirus DNA polymerase, with no pharmacokinetic disposition parameters for brincidofovir. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | This is an in vitro antiviral activity review reporting EC50 values, not pharmacokinetic disposition parameters for brincidofovir. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a narrative review of monkeypox virus immunity, vaccines, and diagnostics; brincidofovir is only mentioned as a potential antiviral with no PK parameters reported. |
| popPK | Gosert_2011 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/CC50) with no pharmacokinetic disposition parameters for brincidofovir. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | In-vitro antiviral/cytotoxicity study (EC50, CC50) with brincidofovir as a test compound; no PK disposition parameters reported. |
| popPK | Olson_2014 | irrelevant | 0 | 0 | In vitro efficacy study reporting EC50 only, no PK disposition parameters for brincidofovir. |
| popPK | Sudarmaji_2022 | irrelevant | 1 | 1 | Systematic review of monkeypox preclinical efficacy studies; brincidofovir PK data (Cmax, Tmax) are only described narratively from a cited study, with no CL/V/model parameters and no numeric PK table present. |
| popPK | Tylden_2015 | irrelevant | 0 | 0 | In vitro antiviral potency study (EC50/EC90) with no PK disposition parameters for brincidofovir. |
| popPK | Valiaeva_2006 | irrelevant | 0 | 0 | In-vitro antiviral synthesis/efficacy study with no PK parameters for brincidofovir. |
| popPK | Zhang_2025 | irrelevant | 2 | 1 | This is an antiviral efficacy/drug-discovery study; PK data (concentration-time profiles) are only shown in figures/supplementary material not provided, with no quantitative CL, V, or model parameters for brincidofovir. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
