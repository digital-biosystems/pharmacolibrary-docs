<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotaxime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefotaxime_Branger2018_reference&quot;,&quot;label&quot;:&quot;B\u00e9ranger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Branger2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Guerrini1986_reference&quot;,&quot;label&quot;:&quot;Guerrini_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Guerrini1986_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_dctx&quot;,&quot;label&quot;:&quot;Trang_1985_dctx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_noncompartmental&quot;,&quot;label&quot;:&quot;Trang_1985_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefotaxime

- **generic name:** cefotaxime
- **ATC codes:** `J01DD01`
- **DrugBank:** [DB00493](https://go.drugbank.com/drugs/DB00493) · **PubChem:** [CID 5742673](https://pubchem.ncbi.nlm.nih.gov/compound/5742673)
- **molar mass:** 455.465 g/mol (C16H17N5O7S2) — DrugBank
- **groups:** approved, investigational

## About

Cefotaxime is a third-generation cephalosporin antibiotic used to treat bacterial infections such as sepsis, meningitis, pneumonia, gonorrhea, and urinary tract infections. It is an approved, widely used antibiotic and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417968](https://www.wikidata.org/wiki/Q417968) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefotaxime | parent | 455.465 | C16H17N5O7S2 | DrugBank | [5742673](https://pubchem.ncbi.nlm.nih.gov/compound/5742673) | Béranger_2018, Guerrini_1986, Hartman_2022, Kemmerich_1983, Shang_2022, Swartling_2022, Trang_1985 |
| desacetylcefotaxime | metabolite | 413.423 | C14H15N5O6S2 | PubChem | [9576239](https://pubchem.ncbi.nlm.nih.gov/compound/9576239) | Béranger_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:24 | 7:48 | 4/4/1 | 0/0/0 | 0/0/0 | 380,608/25,035 | einfracz / qwen3.8-27b | 12 | 2/10 | 12/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Béranger_2018_reference](drugs/drug_cefotaxime/Cefotaxime_Branger2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Béranger A et al., Population Pharmacokinetic Model to Opt…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0602-9](https://doi.org/10.1007/s40262-017-0602-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Guerrini_1986_reference](drugs/drug_cefotaxime/Cefotaxime_Guerrini1986_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Guerrini VH et al., Pharmacokinetics of cefotaxime in the d…, The Veterinary record (1986) | [10.1136/vr.119.4.81](https://doi.org/10.1136/vr.119.4.81) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Trang_1985_dctx](drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx.md) | ▶ model + simulator | 1-compartment, IV | 5 | Trang JM et al., Cefotaxime and desacetylcefotaxime phar…, Antimicrobial agents and ch… (1985) | [10.1128/AAC.28.6.791](https://doi.org/10.1128/AAC.28.6.791) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Trang_1985_noncompartmental](drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental.md) | ▶ model + simulator | 1-compartment, IV | 5 | Trang JM et al., Cefotaxime and desacetylcefotaxime phar…, Antimicrobial agents and ch… (1985) | [10.1128/AAC.28.6.791](https://doi.org/10.1128/AAC.28.6.791) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Trang_1985_model_dependent](drugs/drug_cefotaxime/Cefotaxime_Trang1985_model_dependent.md) | — | 1-compartment (no model) | 4 | Trang JM et al., Cefotaxime and desacetylcefotaxime phar…, Antimicrobial agents and ch… (1985) | [10.1128/AAC.28.6.791](https://doi.org/10.1128/AAC.28.6.791) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hartman_2022_reference](drugs/drug_cefotaxime/Cefotaxime_Hartman2022_reference.md) | — | 1-compartment (no model) | 0 | Hartman SJF et al., Population pharmacokinetics of intraven…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac095](https://doi.org/10.1093/jac/dkac095) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kemmerich_1983_reference](drugs/drug_cefotaxime/Cefotaxime_Kemmerich1983_reference.md) | — | parent + metabolite (no model) | 1 | Kemmerich B et al., Comparative pharmacokinetics of cefoper…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.3.429](https://doi.org/10.1128/AAC.23.3.429) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shang_2022_reference](drugs/drug_cefotaxime/Cefotaxime_Shang2022_reference.md) | — | 1-compartment (no model) | 0 | Shang ZH et al., Optimal dose of cefotaxime in neonates…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.916253](https://doi.org/10.3389/fphar.2022.916253) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Swartling_2022_reference](drugs/drug_cefotaxime/Cefotaxime_Swartling2022_reference.md) | — | 2-compartment (no model) | 4 | Swartling M et al., Population pharmacokinetics of cefotaxi…, European journal of clinica… (2022) | [10.1007/s00228-021-03218-6](https://doi.org/10.1007/s00228-021-03218-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefotaxime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A7` inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC22A11 (inhibitor), SLC22A11 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 77 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 9  ·  extracted 4  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Béranger_2018.pdf` | Béranger A et al., Population Pharmacokinetic Model to Opt…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0602-9](https://doi.org/10.1007/s40262-017-0602-9) | [28980166](https://pubmed.ncbi.nlm.nih.gov/28980166) | The study reports a population pharmacokinetic model for cefotaxime in critically ill children with explicit median values for clearance and volume of distribution. |
| `Guerrini_1986.pdf` | Guerrini VH et al., Pharmacokinetics of cefotaxime in the d…, The Veterinary record (1986) | popPK | 10 | [10.1136/vr.119.4.81](https://doi.org/10.1136/vr.119.4.81) | [3750783](https://pubmed.ncbi.nlm.nih.gov/3750783) | The study reports specific pharmacokinetic parameters including clearance, volume of distribution, and half-life for cefotaxime. |
| `Kemmerich_1983.pdf` | Kemmerich B et al., Comparative pharmacokinetics of cefoper…, Antimicrobial agents and ch… (1983) | popPK | 10 | [10.1128/AAC.23.3.429](https://doi.org/10.1128/AAC.23.3.429) | [6303213](https://pubmed.ncbi.nlm.nih.gov/6303213) | The study reports quantitative PK parameters (half-life, volume, recovery) for cefotaxime in humans, though specific clearance values are not explicitly listed in the text. |

<sub>queue written 2026-10-07T10:17:28.669957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goutelle_2023 | irrelevant | 0 | 0 | This is a PK/PD simulation study using literature-derived models for dosing optimization, not a primary pharmacokinetic study reporting original quantitative disposition parameter values for cefotaxime. |
| popPK | Guilhaumou_2023 | irrelevant | 1 | 0 | The study reports PK/PD target attainment percentages and dose adequacy ratios for cefotaxime in ICU patients but does not provide quantitative population pharmacokinetic parameters (such as clearance, volume of distribution, or half-life) for the drug. |
| popPK | Gustafsson_2001 | irrelevant | 2 | 0 | The study uses an in vitro kinetic model to investigate PK-PD relationships (T&gt;MIC, Emax) rather than reporting quantitative in vivo disposition parameters (CL, V) for cefotaxime. |
| popPK | Morales_2022 | irrelevant | 2 | 0 | This is a scoping review of therapeutic drug monitoring targets; it discusses cefotaxime qualitatively but does not report original quantitative population-PK parameter estimates (e.g., CL, V) for cefotaxime. |
| popPK | Olofsson_2005 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study focused on resistance selection and does not report pharmacokinetic disposition parameters for cefotaxime. |
| popPK | Smekal_2022 | irrelevant | 2 | 1 | The study measures PK/PD target attainment (concentration vs MIC) but does not report quantitative pharmacokinetic parameter estimates (CL, V, half-life) or compartmental models for cefotaxime. |
| popPK | Song_2018 | irrelevant | 2 | 0 | This is a pharmacodynamic Monte Carlo simulation study evaluating dosing regimens, not a study reporting original population pharmacokinetic parameter estimates (CL, V, etc.) for cefotaxime. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | The paper is an antibiotic resistance surveillance study reporting MICs and susceptibility rates, not a pharmacokinetic study with disposition parameters for cefotaxime. |
| popPK | Torumkuney_2025_2 | irrelevant | 0 | 0 | The paper is an antibiotic resistance surveillance study reporting MICs and susceptibility breakpoints, not a pharmacokinetic study of cefotaxime. |
| popPK | Torumkuney_2025_3 | irrelevant | 0 | 0 | The paper is an antibiotic resistance surveillance study (MIC data) and does not report pharmacokinetic parameters for cefotaxime. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | Cefotaxime is mentioned only as a resistance phenotype marker (cefotaxime-resistant) for bacteria, not as the subject drug for PK parameter estimation. |
| popPK | Yalcin_2022 | irrelevant | 2 | 3 | This is a literature review where cefotaxime is only one of 11 drugs discussed, and it lacks a population PK model or primary quantitative parameter estimation for cefotaxime itself. |
| popPK | de_2018 | irrelevant | 0 | 0 | The paper is a general review of clinical applications of antibiotic PK models and does not report specific quantitative pharmacokinetic parameters for cefotaxime. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:17 UTC</sub>
