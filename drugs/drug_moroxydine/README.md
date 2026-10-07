<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;moroxydine&quot;}]"></div>

# moroxydine

- **generic name:** moroxydine
- **ATC codes:** `J05AX01`
- **DrugBank:** [DB13597](https://go.drugbank.com/drugs/DB13597) · **PubChem:** not captured
- **molar mass:** 171.204 g/mol (C6H13N5O) — DrugBank
- **groups:** experimental

## About

Moroxydine is an antiviral agent that was developed for the treatment of viral infections. It is not an established medicine today; it is regarded as an experimental antiviral and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q781304](https://www.wikidata.org/wiki/Q781304) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moroxydine | parent | 171.204 | C6H13N5O | DrugBank | — | Liu_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:19 | 0:27 | 0/1/0 | 2/0/0 | 0/0/0 | 23,815/2,188 | ollama / glm-5.3-flash | 3 | 0/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Liu_2016_reference](drugs/drug_moroxydine/Moroxydine_Liu2016_reference.md) | — | 1-compartment (no model) | 7 | Liu W et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (2016) | [10.1111/jvp.12289](https://doi.org/10.1111/jvp.12289) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbieri_2018_CLIC1_current](drugs/drug_moroxydine/pd_Barbieri_2018_CLIC1_current.md) | CLIC1-mediated ion current ← moroxydine · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbieri_2018_GSC_viability](drugs/drug_moroxydine/pd_Barbieri_2018_GSC_viability.md) | glioblastoma stem cell viability ← moroxydine · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lu_2012_PTP1B](drugs/drug_moroxydine/pd_Lu_2012_PTP1B.md) | Protein tyrosine phosphatase (PTP1B) inhibition ← biguanido-oxovanadium complex 3 (moroxydine ligand) · inhibition effect | — | Lu L et al., Exploration of biguanido-oxovanadium co…, Biometals : an internationa… (2012) | [10.1007/s10534-012-9548-4](https://doi.org/10.1007/s10534-012-9548-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu W et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (2016) | popPK | 10 | [10.1111/jvp.12289](https://doi.org/10.1111/jvp.12289) | [26763124](https://pubmed.ncbi.nlm.nih.gov/26763124) | Original PK study of moroxydine in gibel carp with full numeric parameters (Vd, CL, t1/2, ka, AUC) present in the abstract. |

<sub>queue written 2026-10-07T17:19:15.332467+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kandeel_2021 | irrelevant | 0 | 0 | In silico docking/virtual screening study; moroxydine is only a docking hit with no PK parameters reported. |
| popPK | Riley_1990 | irrelevant | 0 | 0 | This is a review of chromatographic bioanalytical methods for antiviral drugs; moroxydine is only mentioned in a list, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:19 UTC</sub>
