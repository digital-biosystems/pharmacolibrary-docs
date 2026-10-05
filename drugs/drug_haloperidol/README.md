<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;haloperidol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Li2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Pilla2013_reference&quot;,&quot;label&quot;:&quot;Pilla_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Pilla2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# haloperidol

- **generic name:** haloperidol
- **ATC codes:** `N05AD01`
- **DrugBank:** [DB00502](https://go.drugbank.com/drugs/DB00502) · **PubChem:** [CID 3559](https://pubchem.ncbi.nlm.nih.gov/compound/3559)
- **molar mass:** 375.864 g/mol (C21H23ClFNO2) — DrugBank
- **groups:** approved, investigational

## About

Haloperidol is an antipsychotic used to treat conditions such as schizophrenia, psychosis, delirium, Tourette syndrome, and vomiting. It is widely used and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q251347](https://www.wikidata.org/wiki/Q251347) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/2 | 0/0/0 | 0/0/0 | not captured | not captured | 17 | 3/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Li_2022_reference](drugs/drug_haloperidol/Haloperidol_Li2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li L et al., Pharmacokinetics of Haloperidol in Crit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030549](https://doi.org/10.3390/pharmaceutics14030549) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.4134)</sub><br><sub>route_to: `human_review`</sub> | [Franken_2017_reference](drugs/drug_haloperidol/Haloperidol_Franken2017_reference.md) | — | 1-compartment (no model) | 3 | Franken LG et al., Population pharmacokinetics of haloperi…, European journal of clinica… (2017) | [10.1007/s00228-017-2283-6](https://doi.org/10.1007/s00228-017-2283-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Pilla_2013_reference](drugs/drug_haloperidol/Haloperidol_Pilla2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 13 | Pilla Reddy V et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical psychop… (2013) | [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=haloperidol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CBR1 (substrate), CHRM3 (target), DRD1 (target), DRD2 (target), DRD3 (inverse agonist), GRIN2B (target), HRH1 (target), HTR1A (target), HTR2A (target), HTR2C (target), HTR6 (target), HTR7 (target), MCHR1 (inhibitor), SIGMAR1 (target), SLC18A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 169 matched, 20 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yukawa_2002.pdf` | Yukawa E et al., Population pharmacokinetics of haloperi…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241020-00006](https://doi.org/10.2165/00003088-200241020-00006) | [11888334](https://pubmed.ncbi.nlm.nih.gov/11888334) | The study directly reports quantitative population pharmacokinetic parameters and model coefficients for haloperidol, with all numeric values clearly presented in the abstract and tables. |

<sub>queue written 2026-07-18T19:51:40.223020+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berk_2008 | irrelevant | 0 | 0 | The paper is a clinical efficacy analysis comparing smokers and non-smokers and does not report any pharmacokinetic parameters for haloperidol. |
| popPK | Gex-Fabry_2001 | irrelevant | 2 | 1 | This is a review article that references haloperidol clearance data from another study and an external figure, without providing original quantitative population pharmacokinetic parameters or complete numeric values. |
| popPK | Goikolea_2013 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis on depressive switch rates and contains no pharmacokinetic parameters or modeling for haloperidol. |
| popPK | Lako_2013 | irrelevant | 1 | 9 | The study models pharmacodynamic D2 receptor occupancy rather than reporting pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Oh-e_1991 | irrelevant | 0 | 0 | The provided evidence contains only document parsing metadata and no scientific text or numeric values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:15 UTC</sub>
