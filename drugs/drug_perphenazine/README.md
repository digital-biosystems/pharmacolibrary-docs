<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;perphenazine&quot;}]"></div>

# perphenazine

- **generic name:** perphenazine
- **ATC codes:** `N05AB03`
- **DrugBank:** [DB00850](https://go.drugbank.com/drugs/DB00850) · **PubChem:** [CID 4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748)
- **molar mass:** 403.969 g/mol (C21H26ClN3OS) — DrugBank
- **groups:** approved, investigational

## About

Perphenazine is an antipsychotic of the phenothiazine class used to treat schizophrenia and other psychotic conditions, and has also been used for vomiting, Tourette syndrome, Huntington's disease, and anxiety. It remains an approved medicine, though it carries a boxed warning and is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423520](https://www.wikidata.org/wiki/Q423520) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perphenazine | parent | 403.969 | C21H26ClN3OS | DrugBank | [4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748) | Jin_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:27 | 0:41 | 0/0/1 | 2/0/0 | 0/0/0 | 35,095/1,893 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Jin_2010_reference](drugs/drug_perphenazine/Perphenazine_Jin2010_reference.md) | — | 1-compartment (no model) | 2 | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otreba_2016_cell_viability](drugs/drug_perphenazine/pd_Otreba_2016_cell_viability.md) | cell viability ← perphenazine · direct Emax (saturable) effect | — | Otreba M et al., FLUPHENAZINE AND PERPHENAZINE IMPACT ON…, Acta poloniae pharmaceutica (2016) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2018_cell_viability_U87_MG_cells](drugs/drug_perphenazine/pd_Otr_ba_2018_cell_viability_U87_MG_cells.md) | cell viability (U87-MG cells) ← perphenazine · inhibition effect | — | Otręba M et al., Perphenazine and prochlorperazine induc…, Die Pharmazie (2018) | [10.1691/ph.2018.7806](https://doi.org/10.1691/ph.2018.7806) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=perphenazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), CYP2C18 (substrate), DRD1 (target), DRD2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2010.pdf` | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) | [19843655](https://pubmed.ncbi.nlm.nih.gov/19843655) | Population PK model of perphenazine with CL and V values reported directly in the abstract. |

<sub>queue written 2026-10-06T16:27:09.079276+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bustamante_2019 | irrelevant | 1 | 0 | Perphenazine is only a repurposing candidate with an in vitro EC50; no PK disposition parameters are reported, and any PK simulations are not quantified in the evidence. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | Perphenazine appears only as a receptor antagonist potency ranking in an in vitro pharmacology study, with no PK parameters. |
| popPK | Hermes_2011 | irrelevant | 0 | 0 | This is a clinical trial analysis of weight change and symptom scores with no pharmacokinetic parameters for perphenazine. |
| popPK | Otreba_2016 | irrelevant | 0 | 0 | In-vitro melanocyte toxicity study with no PK disposition parameters for perphenazine. |
| popPK | Otręba_2018 | irrelevant | 0 | 0 | In-vitro cytotoxicity study (EC50 in U87-MG cells) with no PK disposition parameters for perphenazine. |
| popPK | Overo_1977 | irrelevant | 2 | 2 | Perphenazine is only the interacting co-administered drug; the PK parameters reported are for nortriptyline, not perphenazine itself. |
| popPK | Perera_2014 | irrelevant | 4 | 2 | Uses prior population-PK parameters for perphenazine but reports no numeric PK parameter values (only CV% and sampling times); actual parameters likely in prior publications/supplements. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | This is a population PK study of haloperidol; perphenazine is only mentioned as a co-administered CYP2D6 substrate, with no perphenazine parameters reported. |
| popPK | Zang_2021 | irrelevant | 2 | 3 | Perphenazine is only a covariate affecting olanzapine clearance (0.78-fold); no perphenazine PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:27 UTC</sub>
