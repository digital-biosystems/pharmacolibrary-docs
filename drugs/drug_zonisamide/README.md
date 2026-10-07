<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;zonisamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zonisamide_Muana2018_reference&quot;,&quot;label&quot;:&quot;Mu\u00f1ana_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zonisamide/Zonisamide_Muana2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zonisamide_Qiu2016_reference&quot;,&quot;label&quot;:&quot;Qiu_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zonisamide/Zonisamide_Qiu2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zonisamide

- **generic name:** zonisamide
- **ATC codes:** `N03AX15`
- **DrugBank:** [DB00909](https://go.drugbank.com/drugs/DB00909) · **PubChem:** [CID 5734](https://pubchem.ncbi.nlm.nih.gov/compound/5734)
- **molar mass:** 212.226 g/mol (C8H8N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Zonisamide is an anticonvulsant used to treat epilepsy, including focal seizures, and has also been studied for Parkinson's disease and migraine. It is an approved medicine, authorised in the European Union for epilepsy, and used alongside other approved and investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q219957](https://www.wikidata.org/wiki/Q219957) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zonisamide | parent | 212.226 | C8H8N2O3S | DrugBank | [5734](https://pubchem.ncbi.nlm.nih.gov/compound/5734) | Okada_2008, Qiu_2016, Silva_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:04 | 2:45 | 2/2/1 | 0/0/0 | 0/0/0 | 116,384/8,246 | einfracz / qwen3.8-27b | 7 | 3/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Muñana_2018_reference](drugs/drug_zonisamide/Zonisamide_Muana2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Muñana KR et al., Population pharmacokinetics of extended…, Journal of veterinary inter… (2018) | [10.1111/jvim.15298](https://doi.org/10.1111/jvim.15298) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Qiu_2016_reference](drugs/drug_zonisamide/Zonisamide_Qiu2016_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Qiu X et al., Population pharmacokinetics of zonisami…, International journal of cl… (2016) | [10.5414/CP202104](https://doi.org/10.5414/CP202104) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Okada_2008_reference](drugs/drug_zonisamide/Zonisamide_Okada2008_reference.md) | — | 1-compartment (no model) | 1 | Okada Y et al., Population estimation regarding the eff…, Therapeutic drug monitoring (2008) | [10.1097/FTD.0b013e31817d842a](https://doi.org/10.1097/FTD.0b013e31817d842a) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Silva_2025_reference](drugs/drug_zonisamide/Zonisamide_Silva2025_reference.md) | — | 1-compartment (no model) | 4 | Silva R et al., A new population pharmacokinetic model…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107023](https://doi.org/10.1016/j.ejps.2025.107023) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2018_reference](drugs/drug_zonisamide/Zonisamide_van2018_reference.md) | — | 1-compartment (no model) | 0 | van Dijkman SC et al., Pharmacokinetic interactions and dosing…, British journal of clinical… (2018) | [10.1111/bcp.13400](https://doi.org/10.1111/bcp.13400) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zonisamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP2C19` inhibitor/substrate, `CYP3A4` substrate, `CYP3A5` substrate, `MAOA` inhibitor, `UGT1A1` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `MAOA` inhibitor, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA10 (inhibitor), CA11 (inhibitor), CA12 (inhibitor), CA13 (inhibitor), CA14 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor), CA5A (inhibitor), CA5B (inhibitor), CA6 (inhibitor), CA7 (inhibitor), CA8 (inhibitor), CA9 (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor), GABRA1 (binder), SCN11A (inhibitor), SCN1A (inhibitor), SCN1B (inhibitor), SCN2A (inhibitor), SCN2B (inhibitor), SCN3A (inhibitor), SCN3B (inhibitor), SCN4A (inhibitor), SCN4B (inhibitor), SCN5A (inhibitor), SCN9A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Okada_2008.pdf` | Okada Y et al., Population estimation regarding the eff…, Therapeutic drug monitoring (2008) | popPK | 10 | [10.1097/FTD.0b013e31817d842a](https://doi.org/10.1097/FTD.0b013e31817d842a) | [18641551](https://pubmed.ncbi.nlm.nih.gov/18641551) | The paper reports a population PK model for zonisamide in humans with explicit numeric values for clearance covariates and model parameters. |
| `Qiu_2016.pdf` | Qiu X et al., Population pharmacokinetics of zonisami…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202104](https://doi.org/10.5414/CP202104) | [27007995](https://pubmed.ncbi.nlm.nih.gov/27007995) | The paper is a population PK study of zonisamide in humans, and all key numeric parameter values (CL, Vc, Q, Ka, Vp) are explicitly reported in the abstract/evidence text. |
| `Silva_2025.pdf` | Silva R et al., A new population pharmacokinetic model…, European journal of pharmac… (2025) | popPK | 10 | [10.1016/j.ejps.2025.107023](https://doi.org/10.1016/j.ejps.2025.107023) | [39848412](https://pubmed.ncbi.nlm.nih.gov/39848412) | The study reports quantitative population pharmacokinetic parameters (CL/F, Vd/F, ka) for zonisamide in humans, with values clearly stated in the abstract. |

<sub>queue written 2026-10-07T08:02:36.811431+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Costa_2010 | irrelevant | 0 | 0 | The study investigates electrophysiological and neuroprotective mechanisms of zonisamide in rat brain slices, containing no pharmacokinetic data. |
| popPK | Devenish_2021 | irrelevant | 0 | 0 | The study is mechanistic (electrophysiology of glycine receptors) and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Hashimoto_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content or pharmacokinetic data for zonisamide. |
| popPK | Huang_2007 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of zonisamide's effect on ion channels in cells, reporting no pharmacokinetic disposition parameters. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic/neurochemical investigation in mice where zonisamide is used as a test agent to assess drug resistance, without reporting zonisamide-specific pharmacokinetic parameters. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | The paper is a simulation study using literature-derived PK models for multiple drugs; specific zonisamide parameter values are referenced in supplementary material (Tables S1-S2) which is not provided. |
| popPK | Morgan_2004 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of carbonic anhydrase inhibition on the AE1 transporter, where zonisamide is used only as a test compound/comparator and no pharmacokinetic parameters (CL, V, t1/2) are reported. |
| popPK | Muñana_2018 | irrelevant | 1 | 1 | The study evaluates the pharmacokinetics of levetiracetam (LEV-XR) in dogs, using zonisamide only as a co-administered comparator drug without reporting its disposition parameters. |
| popPK | Odani_1996 | irrelevant | 0 | 0 | The provided evidence contains only GROBID software metadata and no scientific content, text, or data regarding zonisamide pharmacokinetics. |
| popPK | Quon_2021 | irrelevant | 0 | 0 | This is a clinical neurology study analyzing epilepsy markers where zonisamide is only a comparator/antiseizure medication, with no PK parameters reported. |
| popPK | Saruwatari_2010 | irrelevant | 4 | 1 | This is a review article that discusses zonisamide pharmacogenetics and references population clearance studies (e.g., ref 12, 38) but does not report original quantitative PK parameter values in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:02 UTC</sub>
