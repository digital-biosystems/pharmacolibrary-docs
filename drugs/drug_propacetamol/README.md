<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;propacetamol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propacetamol_Prins2008_reference&quot;,&quot;label&quot;:&quot;Prins_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Prins2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# propacetamol

- **generic name:** propacetamol
- **ATC codes:** `N02BE05`
- **DrugBank:** [DB09288](https://go.drugbank.com/drugs/DB09288) · **PubChem:** [CID 68865](https://pubchem.ncbi.nlm.nih.gov/compound/68865)
- **molar mass:** 264.325 g/mol (C14H20N2O3) — DrugBank
- **groups:** investigational

## About

Propacetamol is an anilide analgesic and antipyretic, a prodrug form of paracetamol used for pain and fever relief. It is not an established marketed medicine in current databases, where it is listed only as investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907888](https://www.wikidata.org/wiki/Q907888) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| propacetamol | parent | 264.325 | C14H20N2O3 | DrugBank | [68865](https://pubchem.ncbi.nlm.nih.gov/compound/68865) | Krekels_2015, Prins_2008 |
| paracetamol | metabolite | 151.165 | C8H9NO2 | PubChem | [1983](https://pubchem.ncbi.nlm.nih.gov/compound/1983) | Krekels_2015, Prins_2008 |
| paracetamol-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| paracetamol-sulphate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:22 | 2:05 | 1/3/0 | 0/0/0 | 0/0/0 | 82,441/7,904 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Prins_2008_reference](drugs/drug_propacetamol/Propacetamol_Prins2008_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Prins SA et al., Pharmacokinetics and analgesic effects…, Paediatric anaesthesia (2008) | [10.1111/j.1460-9592.2008.02619.x](https://doi.org/10.1111/j.1460-9592.2008.02619.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Allegaert_2004_reference](drugs/drug_propacetamol/Propacetamol_Allegaert2004_reference.md) | — | 1-compartment (no model) | 0 | Allegaert K et al., Intravenous paracetamol (propacetamol)…, European journal of clinica… (2004) | [10.1007/s00228-004-0756-x](https://doi.org/10.1007/s00228-004-0756-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Anderson_2005_reference](drugs/drug_propacetamol/Propacetamol_Anderson2005_reference.md) | — | 1-compartment (no model) | 0 | Anderson BJ et al., Pediatric intravenous paracetamol (prop…, Paediatric anaesthesia (2005) | [10.1111/j.1460-9592.2005.01455.x](https://doi.org/10.1111/j.1460-9592.2005.01455.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.733). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Krekels_2015_reference](drugs/drug_propacetamol/Propacetamol_Krekels2015_reference.md) | — | general linear (no model) | 5 | Krekels EH et al., Developmental changes rather than repea…, European journal of clinica… (2015) | [10.1007/s00228-015-1887-y](https://doi.org/10.1007/s00228-015-1887-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propacetamol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate, `CYP1A2` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` inducer/substrate, `NAT2` inhibitor, `SULT1A1` substrate, `SULT1E1` substrate, `UGT1A1` substrate, `UGT1A6` substrate, `UGT1A9` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `NAT2` inhibitor, `SULT1A1` substrate, `UGT1A1` substrate, `UGT1A6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CNR1 (target), PTGS1 (target), PTGS2 (target), SULT1A3 (substrate), SULT2A1 (substrate), TRPV1 (target), UGT1A10 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Allegaert_2004.pdf` | Allegaert K et al., Intravenous paracetamol (propacetamol)…, European journal of clinica… (2004) | popPK | 10 | [10.1007/s00228-004-0756-x](https://doi.org/10.1007/s00228-004-0756-x) | [15071761](https://pubmed.ncbi.nlm.nih.gov/15071761) | The paper reports specific population pharmacokinetic parameters (Vd, CL, BSV) for propacetamol/paracetamol in neonates directly in the abstract. |
| `Anderson_2005.pdf` | Anderson BJ et al., Pediatric intravenous paracetamol (prop…, Paediatric anaesthesia (2005) | popPK | 10 | [10.1111/j.1460-9592.2005.01455.x](https://doi.org/10.1111/j.1460-9592.2005.01455.x) | [15787918](https://pubmed.ncbi.nlm.nih.gov/15787918) | The paper provides a population PK model for propacetamol (via its metabolite paracetamol) with all quantitative parameters (CL, V2, V3, Q, Ka) explicitly listed in the abstract. |
| `Prins_2008.pdf` | Prins SA et al., Pharmacokinetics and analgesic effects…, Paediatric anaesthesia (2008) | popPK | 10 | [10.1111/j.1460-9592.2008.02619.x](https://doi.org/10.1111/j.1460-9592.2008.02619.x) | [18482233](https://pubmed.ncbi.nlm.nih.gov/18482233) | The study reports a population pharmacokinetic model for propacetamol (via its metabolite paracetamol) with all specific numeric parameter values (CL, V, Q, t1/2) provided in the text. |
| `Hahn_2003.pdf` | Hahn TW et al., Analgesic effect of i.v. paracetamol: p…, Acta anaesthesiologica Scan… (2003) | popPK | 8 | [10.1034/j.1399-6576.2003.00046.x](https://doi.org/10.1034/j.1399-6576.2003.00046.x) | [12631041](https://pubmed.ncbi.nlm.nih.gov/12631041) | The paper describes a compartmental PK model for paracetamol (metabolite of propacetamol) in humans, but specific quantitative parameters (CL, V, Q) are not listed in the evidence, only initial concentrations. |
| `Cai_2025.pdf` | Cai X et al., Genetic and clinical factors associated…, Progress in neuro-psychopha… (2025) | pgx | 5 | [10.1016/j.pnpbp.2025.111468](https://doi.org/10.1016/j.pnpbp.2025.111468) | [40812711](https://www.ncbi.nlm.nih.gov/pubmed/40812711) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T07:20:44.109190+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Anderson_2005 | not_relevant | 3 | 2 | The paper is a population PK analysis that mentions a specific concentration (10 mg/L) associated with a pain score (2.6/10) in the conclusion, but it does not report a fitted PD model, Emax/EC50 parameters, or a derived concentration-effect curve. |
| PGx | Anderson_2006 | not_relevant | 0 | 0 | The text is a general introduction/review abstract discussing pharmacogenomics broadly without reporting specific gene-variant effects on propacetamol PK/PD parameters. |
| popPK | Barsch_2021 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of propacetamol's metabolite (DEG) on glycine receptors/transporters in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Barsch_2021 | not_relevant | 0 | 0 | The study investigates the molecular mechanism of propacetamol's metabolite (DEG) on glycine transporters and receptors in Xenopus oocytes, not the pharmacodynamic exposure-response relationship of propacetamol itself in a clinical or physiological context. |
| PGx | Cai_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of valproic acid, where propacetamol is mentioned only as a clinical covariate/co-administration factor. |
| popPK | Hahn_2003 | relevant | 8 | 2 | The paper describes a compartmental PK model for paracetamol (metabolite of propacetamol) in humans, but specific quantitative parameters (CL, V, Q) are not listed in the evidence, only initial concentrations. |
| popPK | Palmer_2008 | irrelevant | 3 | 3 | The study reports pharmacokinetic parameters for acetaminophen (the metabolite) directly, noting that values for propacetamol (the prodrug) are "similar" but not explicitly provided in the text. |
| PGx | Tsai_2018 | not_relevant | 0 | 0 | The study investigates the protective effects of kaempferol on propacetamol-induced liver injury in mice using a chemical intervention, not a genetic variant, genotype, or pharmacogenomic phenotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:20 UTC</sub>
