<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;ketotifen&quot;}]"></div>

# ketotifen

- **generic name:** ketotifen
- **ATC codes:** `R06AX17`, `S01GX08`
- **DrugBank:** [DB00920](https://go.drugbank.com/drugs/DB00920) · **PubChem:** [CID 3827](https://pubchem.ncbi.nlm.nih.gov/compound/3827)
- **molar mass:** 309.425 g/mol (C19H19NOS) — DrugBank
- **groups:** approved, investigational

## About

Ketotifen is an antihistamine used to treat allergic conditions, acting as an H1 antagonist with anti-allergic and anti-itch effects. It is an approved medicine, available both as a systemic antihistamine and as an eye preparation for allergic eye symptoms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2458673](https://www.wikidata.org/wiki/Q2458673) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ketotifen | parent | 309.425 | C19H19NOS | DrugBank | [3827](https://pubchem.ncbi.nlm.nih.gov/compound/3827) | Yagi_2002 |
| ketotifen fumarate | metabolite | 425.499 | C23H23NO5S | PubChem | [5282408](https://pubchem.ncbi.nlm.nih.gov/compound/5282408) | Yagi_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:50 | 9:14 | 0/1/1 | 3/0/0 | 0/0/0 | 147,916/53,824 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yagi_2002_reference](drugs/drug_ketotifen/Ketotifen_Yagi2002_reference.md) | — | 1-compartment (no model) | 1 | Yagi N et al., Pharmacokinetics of ketotifen fumarate…, Biological & pharmaceutical… (2002) | [10.1248/bpb.25.1614](https://doi.org/10.1248/bpb.25.1614) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [McFadyen_1997_reference](drugs/drug_ketotifen/Ketotifen_McFadyen1997_reference.md) | — | 1-compartment (no model) | 0 | McFadyen ML et al., Ketotifen pharmacokinetics in children…, European journal of clinica… (1997) | [10.1007/s002280050305](https://doi.org/10.1007/s002280050305) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kiani_2021_Percent_cell_protection](drugs/drug_ketotifen/pd_Kiani_2021_Percent_cell_protection.md) | Percent cell protection ← ketotifen · direct sigmoid Emax (Hill) effect | — | Kiani P et al., In Vitro Assessment of the Antiviral Ac…, Viruses (2021) | [10.3390/v13040558](https://doi.org/10.3390/v13040558) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kiani_2021_virus_yield](drugs/drug_ketotifen/pd_Kiani_2021_virus_yield.md) | virus yield ← ketotifen · inhibition effect | — | Kiani P et al., In Vitro Assessment of the Antiviral Ac…, Viruses (2021) | [10.3390/v13040558](https://doi.org/10.3390/v13040558) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Schneider_2021_flexion_contracture](drugs/drug_ketotifen/pd_Schneider_2021_flexion_contracture.md) | flexion contracture ← ketotifen fumarate (KF) · direct sigmoid Emax (Hill) effect | — | Schneider PS et al., The Dose-Response Effect of the Mast Ce…, JB & JS open access (2021) | [10.2106/JBJS.OA.20.00057](https://doi.org/10.2106/JBJS.OA.20.00057) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Wang_1990_platelet_aggregations_induced_by_AA_50_mumol_L](drugs/drug_ketotifen/pd_Wang_1990_platelet_aggregations_induced_by_AA_50_mumol_L.md) | platelet aggregations induced by AA 50 mumol/L ← ketotifen · inhibition effect | — | Wang XD et al., [Effects of ketotifen on rabbit platele…, Zhongguo yao li xue bao = A… (1990) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Wang_1990_platelet_aggregations_induced_by_ADP_10_mumol_L](drugs/drug_ketotifen/pd_Wang_1990_platelet_aggregations_induced_by_ADP_10_mumol_L.md) | platelet aggregations induced by ADP 10 mumol/L ← ketotifen · inhibition effect | — | Wang XD et al., [Effects of ketotifen on rabbit platele…, Zhongguo yao li xue bao = A… (1990) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ketotifen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `UGT1A3` substrate, `UGT1A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (target), PGD (inhibitor), UGT2B10 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McFadyen_1997.pdf` | McFadyen ML et al., Ketotifen pharmacokinetics in children…, European journal of clinica… (1997) | popPK | 10 | [10.1007/s002280050305](https://doi.org/10.1007/s002280050305) | [9272408](https://pubmed.ncbi.nlm.nih.gov/9272408) | Population pharmacokinetic model reports numeric ketotifen volume and clearance estimates. |

<sub>queue written 2026-10-07T23:41:27.428432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahuja_2011 | irrelevant | 0 | 0 | Ketotifen is only a comparator in a bronchospasm experiment, with no pharmacokinetic parameters reported. |
| popPK | Kiani_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study and reports no ketotifen disposition or population-PK parameters. |
| popPK | Peters_1990 | irrelevant | 0 | 0 | The study reports antimalarial activity and chloroquine-resistance reversal, not ketotifen pharmacokinetic parameters. |
| popPK | Rychter_2015 | irrelevant | 0 | 0 | Ketotifen is used only as an in-vitro intervention, with no pharmacokinetic disposition parameters reported. |
| popPK | Schneider_2021 | irrelevant | 0 | 0 | This rabbit dose-response study reports a pharmacodynamic EC50, not ketotifen disposition parameters. |
| popPK | Wang_1990 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study and reports no ketotifen disposition parameters. |
| popPK | Xu_2012 | irrelevant | 0 | 0 | Ketotifen is only used as a mast cell stabilizer, and no ketotifen pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:41 UTC</sub>
