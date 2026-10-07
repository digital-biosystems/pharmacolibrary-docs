<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;oxacillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxacillin_Lee2026_reference&quot;,&quot;label&quot;:&quot;Lee_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxacillin_Murnov2022_reference&quot;,&quot;label&quot;:&quot;Mur\u00ednov\u00e1_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxacillin/Oxacillin_Murnov2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oxacillin

- **generic name:** oxacillin
- **ATC codes:** `J01CF04`
- **DrugBank:** [DB00713](https://go.drugbank.com/drugs/DB00713) · **PubChem:** [CID 6196](https://pubchem.ncbi.nlm.nih.gov/compound/6196)
- **molar mass:** 401.436 g/mol (C19H19N3O5S) — DrugBank
- **groups:** approved, investigational

## About

Oxacillin is a penicillin antibiotic used to treat staphylococcal infections, including sepsis, urinary tract infections, cellulitis, osteomyelitis, infective endocarditis, and bacterial meningitis. It is an approved beta-lactamase–resistant penicillin, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418725](https://www.wikidata.org/wiki/Q418725) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxacillin | parent | 401.436 | C19H19N3O5S | DrugBank | [6196](https://pubchem.ncbi.nlm.nih.gov/compound/6196) | Lee_2026, Murínová_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:12 | 2:56 | 2/0/0 | 1/0/1 | 0/0/0 | 173,814/8,335 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lee_2026_reference](drugs/drug_oxacillin/Oxacillin_Lee2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Lee A et al., Population pharmacokinetics and safety…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01777-25](https://doi.org/10.1128/aac.01777-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Murínová_2022_reference](drugs/drug_oxacillin/Oxacillin_Murnov2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Murínová I et al., Population Pharmacokinetic Analysis Pro…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11121736](https://doi.org/10.3390/antibiotics11121736) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Baudoux_2007_CFU](drugs/drug_oxacillin/pd_Baudoux_2007_CFU.md) | log(10) colony-forming unit changes at 24 h ← oxacillin · direct sigmoid Emax (Hill) effect | — | Baudoux P et al., Combined effect of pH and concentration…, The Journal of antimicrobia… (2007) | [10.1093/jac/dkl489](https://doi.org/10.1093/jac/dkl489) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rodriguez_2010_E](drugs/drug_oxacillin/pd_Rodriguez_2010_E.md) | net antibacterial effect (log10 CFU/g) after 24 h of treatment ← oxacillin · direct sigmoid Emax (Hill) effect | model (no simulator) | Rodriguez CA et al., In vitro and in vivo comparison of the…, BMC infectious diseases (2010) | [10.1186/1471-2334-10-153](https://doi.org/10.1186/1471-2334-10-153) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rodriguez_2010_E_2](drugs/drug_oxacillin/pd_Rodriguez_2010_E_2.md) | net antibacterial effect (log10 CFU/g) after 24 h of treatment ← oxacillin · inhibition effect | model (no simulator) | Rodriguez CA et al., In vitro and in vivo comparison of the…, BMC infectious diseases (2010) | [10.1186/1471-2334-10-153](https://doi.org/10.1186/1471-2334-10-153) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxacillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` binder/inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` binder/inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wirth_1976.pdf` | Wirth K et al., [Kinetics of ampicillin, oxacillin and…, Arzneimittel-Forschung (1976) | popPK | 10 | not captured | [1036706](https://pubmed.ncbi.nlm.nih.gov/1036706) | The study is a PK study of oxacillin in humans, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| `Fukumura_1999.pdf` | Fukumura K et al., Analysis program based on finite elemen…, Journal of pharmaceutical s… (1999) | popPK | 9 | [10.1021/js9803757](https://doi.org/10.1021/js9803757) | [10229646](https://pubmed.ncbi.nlm.nih.gov/10229646) | Study reports quantitative kinetic parameters (Vmax, Km, ke) for oxacillin in rat liver. |

<sub>queue written 2026-10-07T10:10:23.408610+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adam_1979 | irrelevant | 2 | 0 | The study focuses on broad-spectrum penicillin combinations where oxacillin is a co-administered component, and no specific quantitative PK values for oxacillin are provided in the evidence. |
| popPK | Baudoux_2007 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of antibiotic activity and accumulation, not a pharmacokinetic study of oxacillin disposition parameters. |
| popPK | Dilworth_2014 | irrelevant | 0 | 0 | The study is an in vitro PK/PD model focusing on vancomycin and piperacillin-tazobactam; oxacillin is mentioned only as a susceptibility marker (MIC) and is not the subject drug. |
| popPK | Fukumura_1998 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding oxacillin pharmacokinetics. |
| popPK | Głowacka_2021 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper focusing on the synthesis and antimicrobial adjuvant activity (MIC changes) of azetidin-2-ones, not a pharmacokinetic study reporting disposition parameters for oxacillin. |
| popPK | Pullen_2006 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for flucloxacillin, not oxacillin, although oxacillin is mentioned only as a susceptibility breakpoint. |
| popPK | Rodriguez_2010 | irrelevant | 1 | 0 | The study compares the antibacterial efficacy of oxacillin generics using a pharmacodynamic model (dose-response), reporting parameters like ED50 and Emax, but does not provide pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Sader_2007 | irrelevant | 0 | 0 | Oxacillin is used only as a susceptibility marker for the subject drugs (cephalosporins), and the paper does not report oxacillin PK parameters. |
| popPK | Scherf_2020 | irrelevant | 0 | 0 | The study investigates the antibacterial and toxicological properties of terpinolene using oxacillin only as a diagnostic agent to measure MIC reduction, without reporting any pharmacokinetic parameters for oxacillin. |
| popPK | Wirth_1976 | relevant | 10 | 0 | The study is a PK study of oxacillin in humans, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| popPK | Yano_1989 | irrelevant | 2 | 8 | The study applies a specialized organ perfusion dispersion model to rat liver data, reporting parameters like blood space (VB) and dispersion number (DN) rather than standard population pharmacokinetic parameters (CL, V, ka). |
| popPK | Yano_1990 | irrelevant | 3 | 2 | The study reports hepatic uptake parameters (partition ratio, elimination rate constant) from an isolated perfused liver experiment, not the standard population pharmacokinetic parameters (CL, V, Q, ka) for the whole organism. |
| popPK | del_2015 | irrelevant | 0 | 0 | The study focuses on intravitreal PK modeling and does not report pharmacokinetic parameters for oxacillin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:10 UTC</sub>
