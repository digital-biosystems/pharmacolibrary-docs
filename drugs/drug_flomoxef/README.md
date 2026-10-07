<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;flomoxef&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flomoxef_Kusumoto2024_reference&quot;,&quot;label&quot;:&quot;Kusumoto_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flomoxef/Flomoxef_Kusumoto2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# flomoxef

- **generic name:** flomoxef
- **ATC codes:** `J01DC14`
- **DrugBank:** [DB11935](https://go.drugbank.com/drugs/DB11935) · **PubChem:** [CID 65864](https://pubchem.ncbi.nlm.nih.gov/compound/65864)
- **molar mass:** 496.46 g/mol (C15H18F2N6O7S2) — DrugBank
- **groups:** investigational

## About

Flomoxef is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is not an approved medicine in major markets such as the European Union and is considered investigational, though it has seen clinical use in some Asian countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5459999](https://www.wikidata.org/wiki/Q5459999) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flomoxef | parent | 496.46 | C15H18F2N6O7S2 | DrugBank | [65864](https://pubchem.ncbi.nlm.nih.gov/compound/65864) | Bekker_2026, Darlow_2022_2, Obata_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:09 | 3:12 | 1/3/3 | 0/0/0 | 0/0/0 | 149,408/6,905 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Kusumoto_2024_reference](drugs/drug_flomoxef/Flomoxef_Kusumoto2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kusumoto M et al., Pharmacokinetic and Pharmacodynamic Ana…, International journal of mo… (2024) | [10.3390/ijms25021105](https://doi.org/10.3390/ijms25021105) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q91 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Bekker_2026_cohort_3fosfomycin_flomoxefn_20](drugs/drug_flomoxef/Flomoxef_Bekker2026_cohort_3fosfomycin_flomoxefn_20.md) | — | 1-compartment (no model) | 3 | Bekker A et al., Pharmacokinetics and safety of fosfomyc…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01126-25](https://doi.org/10.1128/aac.01126-25) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Darlow_2022_2_reference](drugs/drug_flomoxef/Flomoxef_Darlow2022v2_reference.md) | — | 1-compartment (no model) | 5 | Darlow CA et al., Flomoxef for neonates: extending option…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkab468](https://doi.org/10.1093/jac/dkab468) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Obata_1987_reference](drugs/drug_flomoxef/Flomoxef_Obata1987_reference.md) | — | 1-compartment (no model) | 3 | Obata T et al., [Studies on antimicrobial concentration…, The Japanese journal of ant… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bekker_2026_cohort_1fosfomycin_amikacinn_21](drugs/drug_flomoxef/Flomoxef_Bekker2026_cohort_1fosfomycin_amikacinn_21.md) | — | 1-compartment (no model) | 0 | Bekker A et al., Pharmacokinetics and safety of fosfomyc…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01126-25](https://doi.org/10.1128/aac.01126-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bekker_2026_cohort_2flomoxef_amikacinn_21](drugs/drug_flomoxef/Flomoxef_Bekker2026_cohort_2flomoxef_amikacinn_21.md) | — | 1-compartment (no model) | 0 | Bekker A et al., Pharmacokinetics and safety of fosfomyc…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01126-25](https://doi.org/10.1128/aac.01126-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hamada_2022_reference](drugs/drug_flomoxef/Flomoxef_Hamada2022_reference.md) | — | general linear (no model) | 0 | Hamada Y et al., Pharmacokinetic/Pharmacodynamic Analysi…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11040456](https://doi.org/10.3390/antibiotics11040456) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 7  ·  extracted 1  ·  needs_review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ikawa_2008.pdf` | Ikawa K et al., Development of breakpoints of cephems f…, Journal of infection and ch… (2008) | popPK | 10 | [10.1007/s10156-008-0598-z](https://doi.org/10.1007/s10156-008-0598-z) | [18622678](https://pubmed.ncbi.nlm.nih.gov/18622678) | The study describes a population pharmacokinetic model for flomoxef in humans, but the specific numeric parameter values are not included in the provided abstract text. |
| `Komatsu_2022.pdf` | Komatsu T et al., Population Pharmacokinetic-Pharmacodyna…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.02303-21](https://doi.org/10.1128/aac.02303-21) | [35306834](https://pubmed.ncbi.nlm.nih.gov/35306834) | The study is a population PK analysis of flomoxef in humans, but specific numeric parameter values (CL, V, etc.) are not included in the provided evidence, which only contains the abstract and title. |
| `Obata_1987.pdf` | Obata T et al., [Studies on antimicrobial concentration…, The Japanese journal of ant… (1987) | popPK | 9 | not captured | [3444023](https://pubmed.ncbi.nlm.nih.gov/3444023) | The study reports quantitative PK parameters (Cmax, t1/2, AUC) derived from a two-compartment model for flomoxef in humans. |
| `Sasagawa_1993.pdf` | Sasagawa F et al., [Pharmacokinetics of flomoxef in childr…, The Japanese journal of ant… (1993) | popPK | 9 | not captured | [8371488](https://pubmed.ncbi.nlm.nih.gov/8371488) | The study investigates flomoxef PK in children and uses a two-compartment model, but the specific quantitative parameters (CL, V, t1/2) are likely in the truncated full text or tables, while the provided evidence only lists concentration-time data. |
| `Masuda_2008.pdf` | Masuda Z et al., Pharmacokinetic analysis of flomoxef in…, General thoracic and cardio… (2008) | popPK | 8 | [10.1007/s11748-007-0208-5](https://doi.org/10.1007/s11748-007-0208-5) | [18401677](https://pubmed.ncbi.nlm.nih.gov/18401677) | The study is a relevant pharmacokinetic modeling study of flomoxef, but specific numeric parameter values (CL, V, Q, ka) are not provided in the abstract or evidence text. |

<sub>queue written 2026-10-07T11:06:17.203690+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ikawa_2008 | relevant | 10 | 2 | The study describes a population pharmacokinetic model for flomoxef in humans, but the specific numeric parameter values are not included in the provided abstract text. |
| popPK | Komatsu_2022 | relevant | 10 | 0 | The study is a population PK analysis of flomoxef in humans, but specific numeric parameter values (CL, V, etc.) are not included in the provided evidence, which only contains the abstract and title. |
| popPK | Masuda_2008 | relevant | 8 | 1 | The study is a relevant pharmacokinetic modeling study of flomoxef, but specific numeric parameter values (CL, V, Q, ka) are not provided in the abstract or evidence text. |
| popPK | Ohno_2007 | irrelevant | 2 | 0 | Flomoxef is used only as a comparator for PK/PD calculations (MIC data) and no specific quantitative PK parameter values (CL, V, etc.) for flomoxef are reported in the text. |
| popPK | Sasagawa_1993 | relevant | 9 | 2 | The study investigates flomoxef PK in children and uses a two-compartment model, but the specific quantitative parameters (CL, V, t1/2) are likely in the truncated full text or tables, while the provided evidence only lists concentration-time data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:06 UTC</sub>
