<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;zolmitriptan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zolmitriptan_Zhou2017_reference&quot;,&quot;label&quot;:&quot;Zhou_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zolmitriptan/Zolmitriptan_Zhou2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zolmitriptan

- **generic name:** zolmitriptan
- **ATC codes:** `N02CC03`
- **DrugBank:** [DB00315](https://go.drugbank.com/drugs/DB00315) · **PubChem:** [CID 60857](https://pubchem.ncbi.nlm.nih.gov/compound/60857)
- **molar mass:** 287.3568 g/mol (C16H21N3O2) — DrugBank
- **groups:** approved, investigational

## About

Zolmitriptan is a serotonin 5-HT1 receptor agonist used to treat migraine attacks. It is an approved medicine, widely used as an antimigraine preparation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q218820](https://www.wikidata.org/wiki/Q218820) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zolmitriptan | parent | 287.357 | C16H21N3O2 | DrugBank | [60857](https://pubchem.ncbi.nlm.nih.gov/compound/60857) | Zhou_2017 |
| 183C91 | metabolite | 273.336 | C15H19N3O2 | PubChem | [178536](https://pubchem.ncbi.nlm.nih.gov/compound/178536) | Zhou_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:45 | 0:36 | 1/0/0 | 1/0/1 | 0/0/0 | 57,713/3,128 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhou_2017_reference](drugs/drug_zolmitriptan/Zolmitriptan_Zhou2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Zhou W et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.935](https://doi.org/10.1002/jcph.935) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wurch_2000_inositol_phosphate_formation](drugs/drug_zolmitriptan/pd_Wurch_2000_inositol_phosphate_formation.md) | inositol phosphate formation ← zolmitriptan · direct Emax (saturable) effect | — | Wurch T et al., Coupling of canine serotonin 5-HT(1B) a…, Journal of neurochemistry (2000) | [10.1046/j.1471-4159.2000.0751180.x](https://doi.org/10.1046/j.1471-4159.2000.0751180.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [MaassenVanDenBrink_1998_contraction](drugs/drug_zolmitriptan/pd_MaassenVanDenBrink_1998_contraction.md) | Coronary artery contraction ← zolmitriptan · direct Emax (saturable) effect | model (no simulator) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zolmitriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | small intestine | `ABCB1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown | DrugBank actor |
| metabolism | brain | `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1B (target), HTR1D (target), HTR1E (target), HTR1F (target), HTR2A (target), HTR2B (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2017.pdf` | Zhou W et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.935](https://doi.org/10.1002/jcph.935) | [28581633](https://pubmed.ncbi.nlm.nih.gov/28581633) | The evidence explicitly provides quantitative population PK parameters (clearance, volume of distribution) and variability for zolmitriptan. |
| `Pauwels_1998.pdf` | Pauwels PJ et al., Pharmacological analysis of G-protein a…, British journal of pharmaco… (1998) | pd | 5 | [10.1038/sj.bjp.0701584](https://doi.org/10.1038/sj.bjp.0701584) | [9484854](https://www.ncbi.nlm.nih.gov/pubmed/9484854) | metadata signals extractable PD data (Emax) |
| `Moghaddam_2019.pdf` | Moghaddam RA et al., Evaluation of Isolated Vascular Respons…, Drug research (2019) | pd | 4 | [10.1055/a-0800-8391](https://doi.org/10.1055/a-0800-8391) | [30536257](https://www.ncbi.nlm.nih.gov/pubmed/30536257) | metadata signals extractable PD data (EC50) |
| `Murray_2011.pdf` | Murray KC et al., Polysynaptic excitatory postsynaptic po…, Journal of neurophysiology (2011) | pd | 4 | [10.1152/jn.01011.2010](https://doi.org/10.1152/jn.01011.2010) | [21653728](https://www.ncbi.nlm.nih.gov/pubmed/21653728) | metadata signals extractable PD data (sigmoid) |
| `Perez_1998.pdf` | Perez M et al., Dimerization of sumatriptan as an effic…, Bioorganic & medicinal chem… (1998) | pd | 4 | [10.1016/s0960-894x(98)00090-0](https://doi.org/10.1016/s0960-894x(98)00090-0) | [9871581](https://www.ncbi.nlm.nih.gov/pubmed/9871581) | metadata signals extractable PD data (EC50) |
| `Karjalainen_2008.pdf` | Karjalainen MJ et al., In vitro inhibition of CYP1A2 by model…, Basic & clinical pharmacolo… (2008) | pgx | 7 | [10.1111/j.1742-7843.2008.00252.x](https://doi.org/10.1111/j.1742-7843.2008.00252.x) | [18816299](https://www.ncbi.nlm.nih.gov/pubmed/18816299) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Yu_2003.pdf` | Yu LS et al., In vitro metabolism of zolmitriptan in…, Chemico-biological interact… (2003) | pgx | 7 | [10.1016/j.cbi.2003.08.001](https://doi.org/10.1016/j.cbi.2003.08.001) | [14642738](https://www.ncbi.nlm.nih.gov/pubmed/14642738) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T06:44:54.803165+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Capi_2016 | not_relevant | 0 | 0 | The paper discusses eletriptan, not zolmitriptan, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Han_2021 | not_relevant | 0 | 0 | The paper reports CYP2D6-mediated metabolic activation in rats but does not assess human genetic variants or report pharmacogenomic effects on PK/PD parameters. |
| PGx | Karjalainen_2008 | not_relevant | 0 | 0 | The study reports in vitro CYP1A2 inhibition by zolmitriptan, not pharmacokinetic changes driven by genetic variants in zolmitriptan. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of transporter-mediated transport and does not report population pharmacokinetic parameters (CL, V, ka, etc.) for zolmitriptan. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 1 | 0 | This is an in-vitro pharmacodynamic study measuring coronary artery contraction (EC50/Emax) for multiple drugs including zolmitriptan, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Moghaddam_2019 | irrelevant | 0 | 0 | The study is an in-vitro organ bath assessment of vascular reactivity in rats, not a pharmacokinetic study. |
| popPK | Murray_2011 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of 5-HT receptors in rat spinal cord injury models, using zolmitriptan as an agonist rather than measuring its pharmacokinetic disposition. |
| popPK | Pauwels_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cell growth stimulation, not a pharmacokinetic study, and reports receptor affinity/EC50 values rather than disposition parameters. |
| popPK | Pauwels_1998 | irrelevant | 0 | 0 | The study characterizes G-protein activation and receptor binding affinity (pharmacodynamics) for zolmitriptan in an in vitro system, not its pharmacokinetic parameters. |
| PD | Pauwels_1998 | not_relevant | 3 | 2 | The paper reports in vitro receptor pharmacology (binding affinity and G-protein activation potency/efficacy) rather than a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response relationship for the drug in a biological system. |
| popPK | Perez_1998 | irrelevant | 0 | 0 | The paper describes an in-vitro receptor binding and pharmacodynamic study of a novel compound, with zolmitriptan used only as a comparator, and contains no pharmacokinetic parameters. |
| PD | Perez_1998 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding and functional assay data (Ki, EC50, pD2) for a new dimeric compound, comparing it to zolmitriptan, but does not provide a pharmacokinetic or exposure-response analysis for zolmitriptan itself. |
| PGx | Pöstges_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of sumatriptan and zolmitriptan using recombinant enzymes, but it does not report in vivo pharmacokinetic or pharmacodynamic parameters linked to human genetic variants or genotypes. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency (pD2) and efficacy (Emax) in an in vitro bovine model, not pharmacokinetic parameters. |
| PGx | Sternieri_2006 | not_relevant | 2 | 0 | The paper is a review of pharmacokinetic drug-drug interactions and mentions CYP2D6 substrates, but it does not report specific pharmacogenomic effects (gene variants) on the PK or PD parameters of zolmitriptan. |
| PGx | Tepper_2001 | not_relevant | 1 | 2 | The text mentions a drug-drug interaction between zolmitriptan and cimetidine but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | The paper is a review of therapeutic efficacy and delay of effect in RCTs, not a primary pharmacokinetic study reporting quantitative PK parameters (CL, V, etc.) for zolmitriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing time to maximum effect (Emax) with Tmax, but it does not provide numeric concentration-effect parameters (like EC50 or slope) or a derivable PD curve for zolmitriptan. |
| popPK | Wainscott_1998 | irrelevant | 0 | 0 | This is an in vitro receptor binding study (pharmacodynamics) correlating receptor potency with plasma protein extravasation, containing no pharmacokinetic disposition parameters (CL, V, ka, etc.) for zolmitriptan. |
| PGx | Wild_1999 | not_relevant | 0 | 0 | The study identifies the metabolic enzymes (CYP1A2, MAO-A) involved in zolmitriptan clearance but does not report any data linking specific genetic variants or genotypes to changes in PK parameters. |
| popPK | Wurch_2000 | irrelevant | 0 | 0 | The study is a mechanistic in vitro analysis of receptor signaling (inositole phosphate formation) and does not report any pharmacokinetic disposition parameters for zolmitriptan. |
| PGx | Yu_2003 | not_relevant | 0 | 1 | The paper investigates in vitro metabolism and drug-drug interactions in rat liver microsomes but does not study the effect of human gene variants on zolmitriptan's pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:44 UTC</sub>
