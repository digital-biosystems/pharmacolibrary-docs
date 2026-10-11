<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;doxapram&quot;}]"></div>

# doxapram

- **generic name:** doxapram
- **ATC codes:** `R07AB01`
- **DrugBank:** [DB00561](https://go.drugbank.com/drugs/DB00561) · **PubChem:** [CID 3156](https://pubchem.ncbi.nlm.nih.gov/compound/3156)
- **molar mass:** 378.5072 g/mol (C24H30N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Doxapram is a respiratory stimulant used to treat breathing problems, and has also been linked to substance use disorder and respiratory allergy. It is an approved drug, also approved for veterinary use, though some uses remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q737743](https://www.wikidata.org/wiki/Q737743) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doxapram | parent | 378.507 | C24H30N2O2 | DrugBank | [3156](https://pubchem.ncbi.nlm.nih.gov/compound/3156) | Flint_2021, Ogawa_2015 |
| keto-doxapram | metabolite | 392.499 | C24H28N2O3 | PubChem | [162522](https://pubchem.ncbi.nlm.nih.gov/compound/162522) | Flint_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:45 | 2:16 | 0/1/2 | 0/0/0 | 0/0/0 | 53,414/36,910 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Flint_2021_reference](drugs/drug_doxapram/Doxapram_Flint2021_reference.md) | — | parent + metabolite (no model) | 1 | Flint RB et al., The bioavailability and maturing cleara…, Pediatric research (2021) | [10.1038/s41390-020-1037-9](https://doi.org/10.1038/s41390-020-1037-9) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ogawa_2015_reference](drugs/drug_doxapram/Doxapram_Ogawa2015_reference.md) | — | 1-compartment (no model) | 1 | Ogawa Y et al., Population pharmacokinetics of doxapram…, European journal of pediatr… (2015) | [10.1007/s00431-014-2416-1](https://doi.org/10.1007/s00431-014-2416-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Clements_1979_reference](drugs/drug_doxapram/Doxapram_Clements1979_reference.md) | — | 1-compartment (no model) | 0 | Clements JA et al., The disposition of intravenous doxapram…, European journal of clinica… (1979) | [10.1007/BF00568202](https://doi.org/10.1007/BF00568202) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=doxapram) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: KCNK3 (inhibitor), KCNK9 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clements_1979.pdf` | Clements JA et al., The disposition of intravenous doxapram…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00568202](https://doi.org/10.1007/BF00568202) | [527638](https://pubmed.ncbi.nlm.nih.gov/527638) | The paper reports quantitative pharmacokinetic parameters including clearance, half-life, and a three-compartment model for doxapram in humans, with values explicitly stated in the text. |
| `Ogawa_2015.pdf` | Ogawa Y et al., Population pharmacokinetics of doxapram…, European journal of pediatr… (2015) | popPK | 10 | [10.1007/s00431-014-2416-1](https://doi.org/10.1007/s00431-014-2416-1) | [25248340](https://pubmed.ncbi.nlm.nih.gov/25248340) | The abstract explicitly provides the final population pharmacokinetic model equations with specific numeric coefficients for clearance and volume of distribution, as well as variability estimates. |

<sub>queue written 2026-10-07T17:43:13.443085+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cotten_2006 | irrelevant | 1 | 0 | This is an in-vitro mechanistic study of ion channel function and an in-vivo anesthetic study, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Engbers_2021 | irrelevant | 1 | 0 | The study models the pharmacokinetics of caffeine (the subject drug), not doxapram; doxapram is only a co-administered agent tested for interaction, and no PK parameters for doxapram itself are reported. |
| popPK | Jokelainen_2020 | irrelevant | 0 | 0 | This is a clinical pharmacodynamic study assessing the efficacy of doxapram in preventing respiratory depression, with no report of pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Poppe_2020 | relevant | 8 | 4 | The paper applies a population PK model for doxapram in preterm infants and reports specific clearance values (CLD, CLD-KD) and bioavailability for a reference individual, although the full parameter estimates and variability are in Supplementary Table 1. |
| popPK | Roozekrans_2017 | irrelevant | 4 | 0 | The study includes a population PK model for doxapram, but the provided evidence contains no numeric parameter values (CL, V, etc.), only qualitative descriptions and concentration ranges. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:44 UTC</sub>
