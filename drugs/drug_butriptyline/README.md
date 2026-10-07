<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;butriptyline&quot;}]"></div>

# butriptyline

- **generic name:** butriptyline
- **ATC codes:** `N06AA15`
- **DrugBank:** [DB09016](https://go.drugbank.com/drugs/DB09016) · **PubChem:** [CID 21772](https://pubchem.ncbi.nlm.nih.gov/compound/21772)
- **groups:** approved, withdrawn

## About

Butriptyline is a tricyclic antidepressant that was used to treat depression and also has anxiolytic effects. It has been withdrawn and is no longer marketed.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904524](https://www.wikidata.org/wiki/Q904524) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| butriptyline | parent | 293.454 | C21H27N | PubChem | [21772](https://pubchem.ncbi.nlm.nih.gov/compound/21772) | Bourgouin_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:11 | 0:22 | 0/1/0 | 0/0/0 | 0/0/0 | 15,894/954 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Bourgouin_1981_reference](drugs/drug_butriptyline/Butriptyline_Bourgouin1981_reference.md) | — | 1-compartment (no model) | 3 | Bourgouin J et al., Butriptyline: human pharmacokinetics an…, Biopharmaceutics & drug dis… (1981) | [10.1002/bdd.2510020204](https://doi.org/10.1002/bdd.2510020204) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=butriptyline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | brain | `SLC6A4` inhibitor/target | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/target | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), HTR2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bourgouin_1981.pdf` | Bourgouin J et al., Butriptyline: human pharmacokinetics an…, Biopharmaceutics & drug dis… (1981) | popPK | 8 | [10.1002/bdd.2510020204](https://doi.org/10.1002/bdd.2510020204) | [6894708](https://pubmed.ncbi.nlm.nih.gov/6894708) | Human PK study with two-compartment model; some numeric values (Tmax, Cmax, half-life ~20 h) present in abstract, but full CL/V parameters likely in tables not shown. |
| `Randrup_1977.pdf` | Randrup A et al., Uptake inhibition of biogenic amines by…, Psychopharmacology (1977) | pd | 4 | [10.1007/BF00492370](https://doi.org/10.1007/BF00492370) | [408861](https://www.ncbi.nlm.nih.gov/pubmed/408861) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T22:11:15.695682+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 1 | 0 | A review of tricyclic antidepressant PK that only mentions butriptyline as needing further study, with no quantitative parameters. |
| popPK | Bonnet_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake/release in rat synaptosomes, not a pharmacokinetic study reporting disposition parameters for butriptyline. |
| PD | Bonnet_1984 | not_relevant | 3 | 2 | The paper reports a qualitative observation of dopamine release at high concentrations (&gt;3 x 10^-6 M) for butriptyline but does not provide specific numeric PD parameters (like IC50 or Emax) or a full concentration-effect curve for this specific drug in the provided text. |
| popPK | Boyer_1980 | irrelevant | 0 | 0 | A narrative review of plasma level–efficacy correlations with no quantitative PK parameters for butriptyline. |
| popPK | Crawley_1981 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study using butriptyline only as a negative control to demonstrate specificity, with no pharmacokinetic parameters reported. |
| PD | Crawley_1981 | not_relevant | 0 | 0 | The paper only qualitatively states that butriptyline did not produce the behavioral effect in a specific animal model, without providing any numeric dose-response data, concentration-effect curves, or PD parameters. |
| popPK | Guelfi_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing butriptyline and amitriptyline, reporting no pharmacokinetic parameters. |
| PD | Guelfi_1983 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and side effects at fixed/flexible doses but does not report plasma concentrations or any quantitative exposure-response or dose-response modeling. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | This is a receptor pharmacology study in rat brain slices with no PK disposition parameters for butriptyline. |
| popPK | Randrup_1977 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Randrup_1977 | not_relevant | 0 | 0 | The paper is a theoretical review discussing the dopamine hypothesis and amine uptake inhibition, containing no experimental PK/PD data or numeric parameters for butriptyline. |
| popPK | Risch_1979 | irrelevant | 0 | 0 | This is a review of plasma level–efficacy relationships; butriptyline is only mentioned as awaiting further study, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:11 UTC</sub>
