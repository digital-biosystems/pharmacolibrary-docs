<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;bempedoic acid&quot;}]"></div>

# bempedoic acid

- **generic name:** bempedoic acid
- **ATC codes:** `C10AX15`, `C10BA10`
- **DrugBank:** [DB11936](https://go.drugbank.com/drugs/DB11936) · **PubChem:** [CID 10472693](https://pubchem.ncbi.nlm.nih.gov/compound/10472693)
- **molar mass:** 344.492 g/mol (C19H36O5) — DrugBank
- **groups:** approved, investigational

## About

Bempedoic acid is a lipid-lowering medicine used to treat high cholesterol and other dyslipidaemias. It is authorised in the European Union and is used, alone or in combination with other lipid-modifying agents, to lower blood cholesterol.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27075007](https://www.wikidata.org/wiki/Q27075007) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bempedoic acid (bempedoic_acid) | parent | 344.492 | C19H36O5 | DrugBank | [10472693](https://pubchem.ncbi.nlm.nih.gov/compound/10472693) | Jadhav_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:00 | 10:32 | 2/0/0 | 0/0/0 | 0/0/0 | 150,895/30,296 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105), gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed 0/2</span> | [Amore_2023_reference](drugs/drug_bempedoic_acid/BempedoicAcid_Amore2023_reference.md) | — | 2-compartment (no model) | 3 | Amore BM et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2023) | [10.3390/pharmaceutics15051476](https://doi.org/10.3390/pharmaceutics15051476) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.944), gpt-oss:120b (not confirmed, agreement 0.789). The first reading is what the record holds.">cross-check: disputed 0/2</span> | [Jadhav_2023_reference](drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference.md) | — | parent + metabolite (no model) | 4 (+2 cov.) | Jadhav SB et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09864-w](https://doi.org/10.1007/s10928-023-09864-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bempedoic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCC3` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACLY (inhibitor), NUAK2 (activator), SLC27A2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nguyen_2026 | irrelevant | 0 | 0 | The paper is a clinical practice study analyzing lipid management variability and does not report any pharmacokinetic parameters for bempedoic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:51 UTC</sub>
