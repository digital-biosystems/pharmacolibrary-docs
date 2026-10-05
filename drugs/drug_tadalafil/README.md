<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;tadalafil&quot;}]"></div>

# tadalafil

- **generic name:** tadalafil
- **ATC codes:** `C02KX52`, `C02KX54`, `G04BE08`, `G04CA54`, `G04CB51`
- **DrugBank:** [DB00820](https://go.drugbank.com/drugs/DB00820) · **PubChem:** [CID 110635](https://pubchem.ncbi.nlm.nih.gov/compound/110635)
- **molar mass:** 389.404 g/mol (C22H19N3O4) — DrugBank
- **groups:** approved, investigational

## About

Tadalafil is used to treat erectile dysfunction, enlarged prostate, and pulmonary arterial hypertension. It is widely used and authorised in the European Union for erectile dysfunction and pulmonary hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424156](https://www.wikidata.org/wiki/Q424156) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tadalafil | parent | 389.404 | C22H19N3O4 | DrugBank | [110635](https://pubchem.ncbi.nlm.nih.gov/compound/110635) | Ferguson-Sells_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:57 | 4:22 | 0/1/0 | 0/0/0 | 0/0/0 | 30,314/16,626 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ferguson-Sells_2022_reference](drugs/drug_tadalafil/Tadalafil_FergusonSells2022_reference.md) | — | 1-compartment (no model) | 2 | Ferguson-Sells L et al., Population Pharmacokinetics of Tadalafi…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01052-8](https://doi.org/10.1007/s40262-021-01052-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tadalafil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PDE11A (inhibitor), PDE5A (inhibitor), PDE6G (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2018.pdf` | Kim JS et al., Enhanced Bioavailability of Tadalafil a…, Pharmaceutics (2018) | popPK | 9 | [10.3390/pharmaceutics10040187](https://doi.org/10.3390/pharmaceutics10040187) | [30326564](https://pubmed.ncbi.nlm.nih.gov/30326564) | The paper describes a pharmacokinetic study of tadalafil in dogs using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |
| `Na_2019.pdf` | Na YG et al., Effect of Ticagrelor, a Cytochrome P450…, Pharmaceutics (2019) | popPK | 9 | [10.3390/pharmaceutics11070354](https://doi.org/10.3390/pharmaceutics11070354) | [31330787](https://pubmed.ncbi.nlm.nih.gov/31330787) | The study reports quantitative PK parameters (clearance reduction, exposure increase) for tadalafil in rats, but specific numeric values for CL, V, or ka are not explicitly listed in the provided text. |

<sub>queue written 2026-09-30T06:53:11.804824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2018 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of tadalafil in dogs using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |
| popPK | Kim_2022 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios (GMRs) for AUC and Cmax in a drug interaction study, lacking absolute quantitative disposition parameters (CL, V, ka) or a compartmental model for tadalafil. |
| popPK | Na_2019 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance reduction, exposure increase) for tadalafil in rats, but specific numeric values for CL, V, or ka are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 03:46 UTC</sub>
