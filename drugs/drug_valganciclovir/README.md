<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valganciclovir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valganciclovir_Itohara2025_reference&quot;,&quot;label&quot;:&quot;Itohara_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valganciclovir/Valganciclovir_Itohara2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# valganciclovir

- **generic name:** valganciclovir
- **ATC codes:** `J05AB14`
- **DrugBank:** [DB01610](https://go.drugbank.com/drugs/DB01610) · **PubChem:** [CID 64147](https://pubchem.ncbi.nlm.nih.gov/compound/64147)
- **molar mass:** 354.3617 g/mol (C14H22N6O5) — DrugBank
- **groups:** approved, investigational

## About

Valganciclovir is an antiviral drug used to treat cytomegalovirus retinitis. It is an approved medicine and is included on the WHO list of essential medicines, so it is used widely around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423384](https://www.wikidata.org/wiki/Q423384) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:41 | 3:55 | 1/2/0 | 0/0/1 | 0/0/0 | 138,387/9,338 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Itohara_2025_reference](drugs/drug_valganciclovir/Valganciclovir_Itohara2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Itohara K et al., Pharmacokinetic and Pharmacodynamic Ass…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001257](https://doi.org/10.1097/FTD.0000000000001257) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Czock_2002_reference](drugs/drug_valganciclovir/Valganciclovir_Czock2002_reference.md) | — | 1-compartment (no model) | 0 | Czock D et al., Pharmacokinetics of valganciclovir and…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.126306](https://doi.org/10.1067/mcp.2002.126306) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Märtson_2022_reference](drugs/drug_valganciclovir/Valganciclovir_Mrtson2022_reference.md) | — | 2-compartment (no model) | 5 | Märtson AG et al., Therapeutic Drug Monitoring of Ganciclo…, Therapeutic drug monitoring (2022) | [10.1097/FTD.0000000000000925](https://doi.org/10.1097/FTD.0000000000000925) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Koloskoff_2025_CMV_viral_load](drugs/drug_valganciclovir/pd_Koloskoff_2025_CMV_viral_load.md) | CMV viral load in plasma ← ganciclovir · indirect response — drug stimulates the loss of CMV viral load in plasma | model (no simulator) | Koloskoff K et al., Pharmacokinetic/Pharmacodynamic Modelli…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01526-z](https://doi.org/10.1007/s40262-025-01526-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=valganciclovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` unknown | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (adduct), SLC6A14 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Czock_2002.pdf` | Czock D et al., Pharmacokinetics of valganciclovir and…, Clinical pharmacology and t… (2002) | popPK | 10 | [10.1067/mcp.2002.126306](https://doi.org/10.1067/mcp.2002.126306) | [12189361](https://pubmed.ncbi.nlm.nih.gov/12189361) | The study reports PK parameters for ganciclovir (the active metabolite of valganciclovir), including specific numeric values for Cmax, Tmax, half-life, and bioavailability in the abstract, though full compartmental parameter estimates (CL, V) are likely in the body or tables not fully detailed here. |
| `Facchin_2019.pdf` | Facchin A et al., Population pharmacokinetics of ganciclo…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01192-19](https://doi.org/10.1128/AAC.01192-19) | [31527022](https://pubmed.ncbi.nlm.nih.gov/31527022) | The paper describes a population PK model for the active metabolite (ganciclovir) of valganciclovir, but the abstract only contains qualitative descriptions and percentages, with no specific numeric parameter values (CL, V, etc.) provided in the evidence. |

<sub>queue written 2026-10-07T14:38:33.115697+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Facchin_2019 | relevant | 10 | 1 | The paper describes a population PK model for the active metabolite (ganciclovir) of valganciclovir, but the abstract only contains qualitative descriptions and percentages, with no specific numeric parameter values (CL, V, etc.) provided in the evidence. |
| popPK | Hutterer_2017 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of DYRK inhibitors against herpesviruses and mentions valganciclovir only as a comparator/contextual therapy without providing any pharmacokinetic parameters. |
| popPK | Koloskoff_2025 | irrelevant | 5 | 2 | The study reports population PK parameters only for the active metabolite ganciclovir (referenced from a previous publication [13]) and focuses on PD modeling; specific valganciclovir PK parameter values (ka, F) are not provided in the text or tables, only AUC targets. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotic pharmacokinetics in obesity and does not study valganciclovir. |
| popPK | Selby_2023 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for ganciclovir (the parent drug), not valganciclovir, and the study specifically utilized intravenous ganciclovir, so it does not address the pharmacokinetics or absorption of valganciclovir. |
| popPK | Stockmann_2015 | irrelevant | 0 | 0 | The paper is a review article that discusses pharmacokinetics without providing original quantitative parameter values, clearance, or volume of distribution for valganciclovir. |
| popPK | Tollefson_2022 | irrelevant | 0 | 0 | This is an in vitro antiviral efficacy study where valganciclovir serves only as a comparator agent, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:38 UTC</sub>
