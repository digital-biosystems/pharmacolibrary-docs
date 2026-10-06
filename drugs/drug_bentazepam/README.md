<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;bentazepam&quot;}]"></div>

# bentazepam

- **generic name:** bentazepam
- **ATC codes:** `N05BA24`
- **DrugBank:** [DB14719](https://go.drugbank.com/drugs/DB14719) · **PubChem:** not captured
- **molar mass:** 296.39 g/mol (C17H16N2OS) — DrugBank
- **groups:** experimental

## About

Bentazepam is a benzodiazepine-derivative anxiolytic, sedative and hypnotic that has been used to treat anxiety and sleep problems. It is considered an experimental drug and is not in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1421936](https://www.wikidata.org/wiki/Q1421936) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bentazepam | parent | 296.39 | C17H16N2OS | DrugBank | — | Colino_1991, Fernandez_1988, Mariño_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:19 | 0:48 | 1/3/0 | 0/0/0 | 0/0/0 | 30,621/2,075 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fernandez_1988_reference](drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference.md) | held back | 2-compartment, oral | 6 | Fernandez Lastra C et al., Discrimination of kinetic models in het…, International journal of cl… (1988) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Colino_1991_reference](drugs/drug_bentazepam/Bentazepam_Colino1991_reference.md) | — | 1-compartment (no model) | 4 | Colino CI et al., Open-loop feedback control of serum ben…, International journal of cl… (1991) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mariño_1987_reference](drugs/drug_bentazepam/Bentazepam_Mario1987_reference.md) | — | 1-compartment (no model) | 3 | Mariño EL et al., Simulation of plasma bentazepam levels…, International journal of cl… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mariño_1987_2_reference](drugs/drug_bentazepam/Bentazepam_Mario19872_reference.md) | — | 1-compartment (no model) | 0 | Mariño EL et al., Parametrization by non-linear regressio…, International journal of cl… (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bentazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colino_1991.pdf` | Colino CI et al., Open-loop feedback control of serum ben…, International journal of cl… (1991) | popPK | 10 | not captured | [1800395](https://pubmed.ncbi.nlm.nih.gov/1800395) | Population PK parameters (Ka, Vd, Ke, half-life) for bentazepam are reported numerically in the abstract. |
| `Fernandez_1988.pdf` | Fernandez Lastra C et al., Discrimination of kinetic models in het…, International journal of cl… (1988) | popPK | 10 | not captured | [3209281](https://pubmed.ncbi.nlm.nih.gov/3209281) | Population/compartmental PK parameters for bentazepam (Ka, Vd, Ke, K12, K21) are reported numerically in the abstract for 9 human patients. |
| `Mariño_1987_2.pdf` | Mariño EL et al., Parametrization by non-linear regressio…, International journal of cl… (1987) | popPK | 10 | not captured | [3429066](https://pubmed.ncbi.nlm.nih.gov/3429066) | Human PK study of bentazepam with numeric ka, kel, and Vd values reported directly in the abstract. |
| `Mariño_1987.pdf` | Mariño EL et al., Simulation of plasma bentazepam levels…, International journal of cl… (1987) | popPK | 9 | not captured | [2893777](https://pubmed.ncbi.nlm.nih.gov/2893777) | Population-style PK parameters (ka, kel, Vd) for bentazepam from patient data are reported numerically in the abstract itself. |

<sub>queue written 2026-10-06T18:18:37.055773+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 18:18 UTC</sub>
