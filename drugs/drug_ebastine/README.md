<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;ebastine&quot;}]"></div>

# ebastine

- **generic name:** ebastine
- **ATC codes:** `R06AX22`
- **DrugBank:** [DB11742](https://go.drugbank.com/drugs/DB11742) · **PubChem:** [CID 3191](https://pubchem.ncbi.nlm.nih.gov/compound/3191)
- **molar mass:** 469.6576 g/mol (C32H39NO2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ebastine is a systemic antihistamine that blocks H1 receptors, used to treat allergic conditions such as allergic rhinitis and urticaria. It is an approved medicine, marketed in several countries, though not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2327739](https://www.wikidata.org/wiki/Q2327739) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carebastine | metabolite | — (mass units only) | — | — | — | — |
| hydroxyebastine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:26 | 2:18 | 0/1/0 | 2/1/1 | 0/0/0 | 51,526/11,364 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kang_2011_reference](drugs/drug_ebastine/Ebastine_Kang2011_reference.md) | — | general linear (no model) | 0 | Kang W et al., Myocardial pharmacokinetics of ebastine…, British journal of pharmaco… (2011) | [10.1111/j.1476-5381.2011.01338.x](https://doi.org/10.1111/j.1476-5381.2011.01338.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kang_2011_LVDP](drugs/drug_ebastine/pd_Kang_2011_LVDP.md) | change in left ventricular developed pressure ← ebastine · direct Emax (saturable) effect | — | Kang W et al., Myocardial pharmacokinetics of ebastine…, British journal of pharmaco… (2011) | [10.1111/j.1476-5381.2011.01338.x](https://doi.org/10.1111/j.1476-5381.2011.01338.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vatansever_2021_Mpro](drugs/drug_ebastine/pd_Vatansever_2021_Mpro.md) | Mpro activity ← ebastine · direct sigmoid Emax (Hill) effect | — | Vatansever EC et al., Bepridil is potent against SARS-CoV-2 i…, Proceedings of the National… (2021) | [10.1073/pnas.2012201118](https://doi.org/10.1073/pnas.2012201118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ohtani_1999_QT](drugs/drug_ebastine/pd_Ohtani_1999_QT.md) | QT prolongation ← ebastine · delayed effect through an effect compartment | — | Ohtani H et al., Pharmacokinetic-pharmacodynamic analysi…, Biopharmaceutics & drug dis… (1999) | [10.1002/(sici)1099-081x(199903)20:2&lt;101::aid-bdd160&gt;3.0.co;2-l](https://doi.org/10.1002/(sici)1099-081x(199903)20:2&lt;101::aid-bdd160&gt;3.0.co;2-l) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Desager_1995_pharmacokinetic_pharmacodynamic_relationship](drugs/drug_ebastine/pd_Desager_1995_pharmacokinetic_pharmacodynamic_relationship.md) | pharmacokinetic-pharmacodynamic relationship · direct linear effect | — | Desager JP et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacokinetics (1995) | [10.2165/00003088-199528050-00006](https://doi.org/10.2165/00003088-199528050-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Desager_1995_pharmacokinetic_pharmacodynamic_relationship_2](drugs/drug_ebastine/pd_Desager_1995_pharmacokinetic_pharmacodynamic_relationship_2.md) | pharmacokinetic-pharmacodynamic relationship · model not identified | — | Desager JP et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacokinetics (1995) | [10.2165/00003088-199528050-00006](https://doi.org/10.2165/00003088-199528050-00006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ebastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Desager_1995 | irrelevant | 2 | 0 | This review mentions nonlinear ebastine pharmacokinetics in dogs but provides no numeric disposition parameters. |
| popPK | Ohtani_1999 | irrelevant | 2 | 0 | Rat ebastine concentrations were measured, but the reported values are pharmacodynamic effect parameters, not disposition parameters. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | Ebastine is tested as an in-vitro protease inhibitor, with no quantitative pharmacokinetic disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:24 UTC</sub>
